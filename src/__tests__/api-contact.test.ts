/**
 * @jest-environment node
 */

/**
 * Contact API Route Tests
 *
 * These tests validate the /api/contact endpoint logic.
 * Runs in Node environment (not jsdom) because Next.js API routes
 * use Web APIs (Request/Response) available natively in Node 18+.
 */

// Mock Resend before importing the route
jest.mock("resend", () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ id: "test-id" }),
    },
  })),
}));

import { POST } from "@/app/api/contact/route";

describe("POST /api/contact", () => {
  function makeRequest(body: Record<string, unknown>) {
    return new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  it("returns 400 if name is missing", async () => {
    const res = await POST(
      makeRequest({ phone: "1234567890", message: "Test" })
    );
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toContain("required");
  });

  it("returns 400 if phone is missing", async () => {
    const res = await POST(
      makeRequest({ name: "Test", message: "Test" })
    );
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toContain("required");
  });

  it("returns 400 if message is missing", async () => {
    const res = await POST(
      makeRequest({ name: "Test", phone: "1234567890" })
    );
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toContain("required");
  });

  it("returns success without Resend API key (graceful fallback)", async () => {
    delete process.env.RESEND_API_KEY;
    const res = await POST(
      makeRequest({
        name: "Test User",
        phone: "+91 12345 67890",
        message: "Test message",
      })
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.note).toContain("not yet configured");
  });

  it("returns success with Resend API key", async () => {
    process.env.RESEND_API_KEY = "re_test_key";
    const res = await POST(
      makeRequest({
        name: "Test User",
        phone: "+91 12345 67890",
        email: "test@example.com",
        message: "Test message",
      })
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });
});
