1. [slug] = facebook.com/settings/[slug]/page.tsx
- facebook.com/settings/account-settings
- facebook.com/settings/passwordsettings
- facebook.com/settings/123
- facebook.com/settings/312
- facebook.com/settings/arielbatoon
- facebook.com/settings/etc1

2. [...slug] = facebook.com/settings/[...slug]/page.tsx
- facebook.com/settings/page.tsx
- facebook.com/settings -> Not Found -> create another page.tsx under settings folder
- facebook.com/settings/account-settings
- facebook.com/settings/account-settings/change-name
- facebook.com/settings/account-settings/change-name/123
- facebook.com/settings/account-settings/change-name/abc/zyx

3. [[...slug]] = facebook.com/settings/[[...slug]]/page.tsx
- facebook.com/settings
- facebook.com/settings/account-settings
- facebook.com/settings/account-settings/change-name
- facebook.com/settings/account-settings/change-name/123

Scenario:
BLOG PAGE = Should have separate UI and Design
BLOG/POST MULTIPLE PAGES = Should have own layout template for posts.