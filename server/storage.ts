import {
  type CreateContactSubmissionRequest,
  type ContactSubmissionResponse,
  type CreateNewsletterSubscriptionRequest,
  type PublicSiteConfigResponse,
  type SeoPageResponse,
} from "@shared/schema";

export interface IStorage {
  getPublicSiteConfig(): Promise<PublicSiteConfigResponse>;
  getSeoPage(slug: string): Promise<SeoPageResponse | undefined>;
  seedSeoPagesIfEmpty(): Promise<void>;

  createContactSubmission(
    input: CreateContactSubmissionRequest,
  ): Promise<ContactSubmissionResponse>;

  createNewsletterSubscription(
    input: CreateNewsletterSubscriptionRequest,
  ): Promise<void>;
  getNewsletterSubscriptionByEmail(email: string): Promise<{ email: string } | undefined>;
}

// Mock storage for static website (no database required)
export class MockStorage implements IStorage {
  private seoPages: Map<string, SeoPageResponse> = new Map([
    [
      "home",
      {
        slug: "home",
        title: "GAD Legal Consult | Modern Legal Solutions",
        description:
          "Modern legal solutions for business success. Expert counsel in corporate law, fintech compliance, tax advisory, real estate, data privacy, arbitration, and litigation.",
      },
    ],
    [
      "services",
      {
        slug: "services",
        title: "Services | GAD Legal Consult",
        description:
          "Explore GAD Legal Consult services: tax advisory, fintech licensing, company registration, international registration, data privacy, real estate, arbitration, and civil litigation.",
      },
    ],
    [
      "about",
      {
        slug: "about",
        title: "About | GAD Legal Consult",
        description:
          "Founded by Victor Momodu, GAD Legal Consult is a forward-thinking law firm built to meet modern legal and regulatory needs.",
      },
    ],
    [
      "contact",
      {
        slug: "contact",
        title: "Contact | GAD Legal Consult",
        description:
          "Contact GAD Legal Consult to schedule a consultation. Share your needs and our team will respond promptly.",
      },
    ],
  ]);

  private newsletterEmails: Set<string> = new Set();

  async getPublicSiteConfig(): Promise<PublicSiteConfigResponse> {
    return {
      organization: {
        name: "GAD Legal Consult",
        tagline: "A modern Law Firm to meet Modern needs",
        founder: "Victor Momodu",
      },
      contact: {
        phone: undefined,
        email: undefined,
        address: undefined,
        officeHours: undefined,
      },
      social: {
        instagram: undefined,
        facebook: undefined,
        youtube: undefined,
      },
    };
  }

  async getSeoPage(slug: string): Promise<SeoPageResponse | undefined> {
    return this.seoPages.get(slug);
  }

  async seedSeoPagesIfEmpty(): Promise<void> {
    // SEO pages are pre-seeded in the Map
  }

  async createContactSubmission(
    input: CreateContactSubmissionRequest,
  ): Promise<ContactSubmissionResponse> {
    // Log to console for static website (no database)
    console.log("📧 Contact Form Submission:", JSON.stringify(input, null, 2));
    
    // Return mock response
    return {
      id: Date.now(),
      fullName: input.fullName,
      email: input.email,
      phone: input.phone,
      serviceInterestedIn: input.serviceInterestedIn || null,
      message: input.message,
      createdAt: new Date(),
    };
  }

  async getNewsletterSubscriptionByEmail(
    email: string,
  ): Promise<{ email: string } | undefined> {
    return this.newsletterEmails.has(email) ? { email } : undefined;
  }

  async createNewsletterSubscription(
    input: CreateNewsletterSubscriptionRequest,
  ): Promise<void> {
    // Log to console for static website (no database)
    console.log("📬 Newsletter Subscription:", input.email);
    this.newsletterEmails.add(input.email);
  }
}

export const storage = new MockStorage();
