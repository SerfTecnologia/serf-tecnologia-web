import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("leads.create", () => {
  it("should validate email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.create({
        name: "John Doe",
        email: "invalid-email",
        phone: "11999999999",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Email inválido");
    }
  });

  it("should validate phone length", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.create({
        name: "John Doe",
        email: "john@example.com",
        phone: "123",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Telefone deve ter pelo menos 10 dígitos");
    }
  });

  it("should validate name length", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.create({
        name: "A",
        email: "john@example.com",
        phone: "11999999999",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Nome deve ter pelo menos 2 caracteres");
    }
  });

  it("should accept valid lead data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.create({
      name: "John Doe",
      email: "john@example.com",
      phone: "11999999999",
      message: "I need help with my IT infrastructure",
    });

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
  });

  it("should accept lead without message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.create({
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "21987654321",
    });

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
  });
});

describe("leads.list", () => {
  it("should return an array of leads", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.list();

    expect(Array.isArray(result)).toBe(true);
  });
});
