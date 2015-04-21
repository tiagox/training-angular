# Angular Training

This is a simple project to start learning some AngularJS stuff.

## Instructions for **Homework 1**

To get a better feel for *real world* angular we're going to recreate some parts of the app we have now.

For something sufficiently complicated let's examine the Advertisers section.

We won't recreate every single item but a large enough subset to get a real feel for angular.

Advertisers is a subset of functionality that lives within our layout.

(Since CSS is not the goal of this exercise I recommend using bootstrap for a quick jump-start in styling which will also allow you to copy/paste pieces of markup for components such as Navigation and then just "hook them up").

NOTE: Instructions may be out of order / not make sense in a section so read through the whole section.

### General layout

1. Create a page layout for the "site" with some sort of "top level" navigation links
2. Clicking on links in this `nav` should take you to separate sub pages like a standard SPA (Single Page Application) and the browser's back/forward buttons should all function normally.

### Create Advertiser-list page

1. One of the links in the 'top nav' should be *Advertisers*. Clicking on the link should send the user to a page with a list of advertisers in a table.
    - Specifically: the link should show the word "advertisers" and clicking it should take the user to '/advertisers' which will be a list -- in a table -- of all the advertisers.
    - This involves creating view/controller/service to support the page.
    - NOTE: To start you may want to just return static data out of your service but afterwards you should extract that out and create a back-end for it (task below).
    - Add an input box above the table that allows the user to search the table. Text in the search field should filter entries in the table to only show those that contain whatever is placed in the input.
2. Create a simple express app with an endpoint '/advertisers' that you can query using $http from your service to return the data.
    - NOTE: You can get the data by copying out of Bootstrapped data in the live app.

3. One of the links in the last column in the table should be "edit". Clicking this links should go to a new page `advertisers/:id/edit` where `:id` represents the id of the entity in that row and upon navigating there it should display a form to edit that advertiser.

### Edit Advertiser Page

1. Create route/controller/view necessary to support editing an individual advertiser.
2. Add validation.
    - Create at least one required field
    - Create at least one email field
    - Error messages should be shown below the input fields
    - Clicking save should NOT save unless the item is valid. (To represent saving you can console.log to see that it is working. Use the $log service instead of console for logging).

---

## Instructions for **Homework 2**

Angular Router has some pretty big limitations such as only allowing one `ng-view`. For more flexible layouts there is a community module named `ui-router` that allows nested views, in addition to other powerful features. So lets add some more functionality to our app while exploring `ui-router`.

### General layout

1. Continuing with your code from before, convert the routes to instead use UI-Router's 'states'.

### Advertiser Details Page

1. Add a new page that will show advertiser details.
    - This page should be mounted on the url `/advertisers/:id/details`.
    - That page itself (aside for any top level navigation) should have an internal nav-bar akin to the current site with 2-3 'sub-pages'.

### Advertiser Details Subpages

1. Create 2-3 subpages
    - One subpage should be `/settings` which is mounted as a sub-view under it's parent page (`/advertisers/:id/details`). Navigating to that page should show a from that allows the user to edit the specific 'line items' of the advertiser (hint: you should already have a view that does this).
    - create some other subpage

> NOTE:
> - Only the subpages should change/refresh upon navigation.
> - Insure navigation via the Browser's normal controls (back/forward buttons) works.

2. Add validation to the `/advertiser/:id/details/settings` page:
    - Create at least one required field.
    - Create at least one email + required field.
    - Hookup validation to use errors.
    - Ensure that saving does not fire while model/form is invalid (can disable save button altogether).
    - Try changing when validation fires (onChange/onBlur/etc).
