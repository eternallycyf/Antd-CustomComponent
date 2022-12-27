export const apiPrefixMock: string =
  process.env.APP_ENV === "development" ? "/api" : "/api";
export const tokenKey: string = "acpauth";
export const agentId: string =
  process.env.APP_ENV === "development" ? "1480492321" : "1583908988";
