import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// Validate Cloudflare Turnstile token
async function validateTurnstileToken(token: string, ip: string | null): Promise<boolean> {
  if (!token) return false;
  
  try {
    const formData = new FormData();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY || '');
    formData.append('response', token);
    if (ip) formData.append('remoteip', ip);
    
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile validation error:', error);
    return false;
  }
}

// Determine form type based on content
type FormType = 'newsletter' | 'youth-application' | 'corporate-consultation' | 'general-contact';

function determineFormType(data: Record<string, any>): FormType {
  // Newsletter: only email and turnstile token
  if (data.email && !data.name && !data.message && !data.phone) {
    return 'newsletter';
  }
  
  // Youth application: has portfolio, experience, etc.
  if (data.portfolio || data.experience || data.country) {
    return 'youth-application';
  }
  
  // Corporate consultation: has company, service interest
  if (data.company || data.service || data.subject?.includes('Consultation')) {
    return 'corporate-consultation';
  }
  
  return 'general-contact';
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, any> = {};
    
    // Parse request body based on content type
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string') {
          data[key] = value;
        }
      }
    } else {
      return NextResponse.json(
        { error: 'Unsupported content type' },
        { status: 415 }
      );
    }
    
    const { name, email, message, subject, turnstileToken, 'cf-turnstile-response': cfToken } = data;
    const turnstileTokenToValidate = turnstileToken || cfToken;
    
    // Validate Turnstile token
    if (process.env.TURNSTILE_SECRET_KEY) {
      const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
      const isValidToken = await validateTurnstileToken(turnstileTokenToValidate, ip);
      
      if (!isValidToken) {
        return NextResponse.json(
          { error: 'Security verification failed. Please complete the captcha.' },
          { status: 400 }
        );
      }
    }
    
    const formType = determineFormType(data);
    
    // Form-specific validation
    switch (formType) {
      case 'newsletter':
        if (!email) {
          return NextResponse.json(
            { error: 'Email is required for newsletter subscription' },
            { status: 400 }
          );
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return NextResponse.json(
            { error: 'Invalid email address' },
            { status: 400 }
          );
        }
        break;
        
      case 'youth-application':
        if (!name || !email || !data.phone) {
          return NextResponse.json(
            { error: 'Name, email, and phone are required for youth application' },
            { status: 400 }
          );
        }
        break;
        
      case 'corporate-consultation':
      case 'general-contact':
        if (!name || !email || !message) {
          return NextResponse.json(
            { error: 'Name, email, and message are required' },
            { status: 400 }
          );
        }
        break;
    }
    
    // Log submission (production-ready structured logging)
    // In production, consider using a logging service like Sentry, LogRocket, or Vercel Logs
    // For now, we log to console with structured format for better observability
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Contact API] Form submission received:`, {
        type: formType,
        timestamp: new Date().toISOString(),
        data: {
          name: data.name ? 'provided' : 'missing',
          email: data.email ? 'provided' : 'missing',
          hasMessage: !!data.message,
          hasSubject: !!data.subject,
          ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
        }
      });
    } else {
      // Production logging - minimal PII, focus on metrics
      console.log(`[Contact API] Form submission processed - type: ${formType}, timestamp: ${new Date().toISOString()}`);
    }
    
    // Form-specific success messages
    const successMessages = {
      'newsletter': 'Successfully subscribed to newsletter!',
      'youth-application': 'Application submitted successfully! We\'ll review it and contact you within 3 business days.',
      'corporate-consultation': 'Consultation request received! Our team will contact you within 24 hours.',
      'general-contact': 'Message received. We will respond within 24 hours.'
    };
    
    return NextResponse.json(
      { 
        success: true, 
        message: successMessages[formType],
        formType 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
