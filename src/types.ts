import type { AstroBuiltinAttributes } from "astro";
import type { HTMLAttributes } from "astro/types";
import { z } from "astro/zod";

const linkHTMLAttributesSchema = z.record(
  z.union([z.string(), z.number(), z.boolean(), z.undefined()]),
) as z.Schema<
  Omit<HTMLAttributes<"a">, keyof AstroBuiltinAttributes | "children">
>;

const LinkItemHTMLAttributesSchema = () => linkHTMLAttributesSchema.default({});

const navLinkSchema = z.object({
  badge: z.string().optional(),
  label: z.union([z.string(), z.record(z.string())]),
  link: z.string(),
  attrs: LinkItemHTMLAttributesSchema(),
});

const socialSchema = z.object({
  icon: z.string().optional(),
  label: z.string().optional(),
  href: z.string().optional(),
});

export const StarlightThemeBlackConfigSchema = z.object({
  navLinks: z.array(navLinkSchema).optional(),
  social: z.array(socialSchema).optional(),
});

export type StarlightThemeBlackUserConfig = z.input<
  typeof StarlightThemeBlackConfigSchema
>;
export type StarlightThemeBlackConfig = z.output<
  typeof StarlightThemeBlackConfigSchema
>;

export const ExtendDocsSchema = z.object({
  links: z
    .object({
      doc: z.string().optional(),
      api: z.string().optional(),
    })
    .optional(),
});

