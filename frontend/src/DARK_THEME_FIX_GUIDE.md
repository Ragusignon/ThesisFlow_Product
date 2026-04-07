# Dark Theme Fix Guide

## Color Replacement Rules

Replace ALL instances of these hardcoded colors with CSS variables:

### Background Colors
- `bg-white` → `bg-[var(--bg-primary)]`
- `bg-gray-50` → `bg-[var(--bg-secondary)]`
- `bg-gray-100` → `bg-[var(--bg-tertiary)]`
- `bg-white/10` → Keep as-is (used for overlays on brand gradient backgrounds - intentionally white)
- `bg-white/20` → Keep as-is (used for overlays on brand gradient backgrounds)
- `bg-white/5` → Keep as-is (used for overlays on brand gradient backgrounds)

### Text Colors
- `text-white` → `text-[var(--text-primary)]` (ONLY when NOT on brand gradient background!)
- `text-gray-900` → `text-[var(--text-primary)]`
- `text-gray-800` → `text-[var(--text-primary)]`
- `text-gray-700` → `text-[var(--text-secondary)]`
- `text-gray-600` → `text-[var(--text-secondary)]`
- `text-gray-500` → `text-[var(--text-tertiary)]`

### Border Colors
- `border-white` → `border-[var(--border-primary)]`
- `border-gray-200` → `border-[var(--border-primary)]`
- `border-gray-200/40` → `border-[var(--border-primary)]`
- `border-white/20` → Keep as-is (on brand backgrounds)
- `border-white/30` → Keep as-is (on brand backgrounds)

### Hover States
- `hover:bg-white` → `hover:bg-[var(--bg-primary)]`
- `hover:bg-gray-50` → `hover:bg-[var(--bg-secondary)]`
- `hover:bg-gray-100` → `hover:bg-[var(--bg-tertiary)]`
- `hover:text-white` → `hover:text-[var(--text-on-brand)]` (on brand elements)
- `hover:border-white` → `hover:border-[var(--border-primary)]`

## Exception: CTA/Brand Gradient Sections

On brand gradient backgrounds (teal gradients), keep these as-is:
- `text-white` - Stay white (good contrast on teal)
- `bg-white` - Stay white (for buttons on teal background)
- `bg-white/10`, `bg-white/20`, `bg-white/5` - Stay (decorative overlays)
- `border-white/20`, `border-white/30` - Stay (decorative borders)
-  `hover:bg-gray-50` on white buttons on brand backgrounds - keep

These provide proper contrast and are design-intentional.

## Files Requiring Updates (in priority order):

###  **PRIORITY 1: Critical User-Facing Pages**
1. About.tsx (39 instances)
2. Features.tsx (15 instances)  
3. Pricing.tsx (22 instances)

### **PRIORITY 2: Supporting Pages**
4. Security.tsx
5. Blog.tsx + Blog Post Files
6. Contact.tsx
7. HelpCenter.tsx
8. Documentation.tsx
9. Community.tsx
10. Status.tsx
11. ContactSupport.tsx

### **PRIORITY 3: Footer/Legal Pages**
12. PrivacyPolicy.tsx
13. TermsOfService.tsx
14. CookiePolicy.tsx
15. GDPR.tsx
16. Compliance.tsx
17. Accessibility.tsx

### **PRIORITY 4: Other**
18. Integrations.tsx
19. Updates.tsx
20. Roadmap.tsx
21. Careers.tsx
22. PressKit.tsx
23. components/BlogPostLayout.tsx

## NOTE: App.tsx Cleanup Needed

App.tsx lines 679-886 contain duplicate CTASection and HomeFooter functions with hardcoded colors. These should be DELETED since we're using the imported versions from HomePageSections.tsx.
