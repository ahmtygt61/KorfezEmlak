PROJECT NAME:
Korfez Emlak UI Design Project

PROJECT SUBJECT:
Korfez Emlak is a user-centric real estate website designed to help users search, compare, and contact property owners. The main goal is to provide a trustworthy, luxurious, and easy-to-use interface for finding properties in the Kocaeli region.

GROUP MEMBERS AND DUTIES:
- Sema Bercem Karakoyun (B231202024): Conducted user research, designed the Home page using Bootstrap Carousel, and determined the psychological principles.
- Irem Ekmekci (B231202044): Designed the Listings and Detail pages. Implemented the card structures, grid system, and the Offcanvas Favorites menu.
- Ahmet Yigit (B231202049): Developed the Contact page, implemented form elements with HTML5/JavaScript validation, applied the consistent CSS color palette, and tested UI tolerance.

WEBSITE PAGES (Total 4 Pages):
1. Home (index.html)
2. Listings (ilanlar.html)
3. Property Detail (detay.html)
4. Contact (iletisim.html)

Note: The "Favorites" section was implemented as a modern "Offcanvas" side-menu to improve user experience and keep the project strictly within the 4-page limit.

TECHNOLOGIES USED:
- HTML5
- CSS3
- Bootstrap 5
- JavaScript

PART 1: REQUIREMENTS

1. GATHERING REQUIREMENTS:
- Observing: We observed users navigating existing real estate platforms and noticed they struggle with complex filtering and losing their place when checking favorites.
- Interviewing: We interviewed potential home-buyers to understand their priorities (price, location, m2).
- Questionnaires & Surveys: A short survey revealed that users want to see large, high-quality images immediately upon entering the site.

2. USER CHARACTERISTICS & PHYSICAL LIMITATIONS:
- Target Audience: University students looking for rentals and families/investors looking to buy properties.
- Physical Limitation Consideration: For users with visual impairments or color blindness, we avoided low-contrast grey tones. Instead, we designed a high-contrast theme using Dark Navy Blue (#1A365D) and Accent Gold (#C5A059).

3. USER NEEDS & TASK ANALYSIS (USE CASES):
- Goal: Find a suitable property and contact the agent.
- Use Case Scenario: A university student enters the site, uses the "Rent" filter on the Listings page, adds a flat to the Offcanvas Favorites, opens the Detail page, and fills out the Contact form.
- Actions: Navigating the navbar, clicking cards, using dropdown selects, and form submission.

4. PSYCHOLOGICAL PRINCIPLES:
- Visibility: Crucial actions like "Tum Ilanlar" and "Favorilerim" are highly visible on the sticky Navbar.
- Affordance: On the contact form, the "Temizle" (Reset) button is outlined in red, providing a clear affordance that clicking it will perform a destructive/reset action.
- Feedback: Hovering over property cards causes them to lift slightly and cast a shadow, giving the user immediate visual feedback that the element is interactive.

PART 2: DESIGN

1. CONTENT DIAGRAM (4 Steps):
- Identify Tasks: Searching properties, viewing details, saving to favorites, sending messages.
- Group Tasks: Searching and saving are grouped in the Listings page; messaging is grouped in the Contact page.
- Identify Objects: Property image, price, location, room count.
- Map to UI: Mapped into 4 HTML pages using Bootstrap Cards for objects and Forms for actions.

2. DESIGN PRINCIPLES:
- Simplicity: Used Bootstrap's grid system to prevent clutter. Clean layout with adequate white space.
- Structure: A standard, predictable structure across all pages: Sticky Navbar at the top, Main Content in the center, and a Footer at the bottom.
- Consistency: The same Navy/Gold color scheme, typography, and button styles are strictly used across all 4 pages.
- Tolerance: The contact form uses the "required" attribute to prevent empty submissions, and a "type=reset" button is provided to instantly undo mistakes.

3. HUMAN-ACTION CYCLE:
- Gulf of Execution: To make executing the "view favorites" action easy without leaving the current page, we implemented it as an Offcanvas menu.
- Gulf of Evaluation: When a user opens the Favorites menu and it is empty, the system displays a clear text: "Henuz favoriye eklediginiz bir ilan bulunmuyor", closing the evaluation gap.

4. INTERACTION STYLES & GRAPHICAL INTERFACE CONTROLS:
- Interaction Styles: Menu Selection and Form Fill-in.
- Controls Used & Why:
  * Offcanvas Menu: Used for Favorites to prevent navigating away from the listings page, keeping the user in their current context.
  * Cards: Used to chunk property data (image, title, price) into easily digestible, clickable visual blocks.
  * Dropdowns (Select): Used in the Contact form for city selection to prevent user spelling errors (improving Tolerance).

DEFICIENCIES (LIMITATIONS):
- Since this is strictly a front-end UI/UX design project, there is no backend server or database connected. Property listings are static HTML elements, and the contact form does not send real emails. The dynamic behavior of adding items to favorites is simulated via frontend scripts.