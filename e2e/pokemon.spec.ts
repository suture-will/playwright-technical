import { test, expect } from '@playwright/test';


// for this test: navigate to the base page and verify that the page contains certain elements
test('navigate to page and verify', async ({ page }) => {
    // TODO: Go to the index page (the baseURL is set via the webServer in the playwright.config.ts)

    // code that here...

    // TODO: Test that expects the url should be "/" (baseURL is used there) if not using the base url, use the full url.
    // code that here...
    
    // TODO: Test that the new page contains an h1 with "Suture Health Demo" and an h2 with "Dittos Abilities:"

    // code that here...
  })


// for this test: click the button and verify that the page contains certain elements
  test('should fetch and display Ditto abilities', async ({ browser, page }) => {
 
    // code here...

  });
