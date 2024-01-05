# Change Log
All notable changes to the "vuetify-drilldown-table" plugin will be documented in this file.

## v1.1.0
01-5-24
[main] (@webdevnerdstuff)
* Fix typescript issues
* Fix issue with header color not working on sortable columns
* Add level check to fix opacity issue
* Reorganizing
* Add vitest
* Update node version to v20.10.0

## v1.0.1
11-09-23
[main] (@webdevnerdstuff)
* Fix header slot name
* Update docs

## v1.0.0
11-09-23
[main] (@webdevnerdstuff)
* Update lab components to regular components due to Vuetify official releases
* Update packages
* Update Vuetify to v^3.4.0
* Update docs

## v1.0.0-beta-14
11-01-23
[main] (@webdevnerdstuff)
* Change how the header/footer/border colors work. (breaking change)
* Add props for the new color functionality
* Fix table colors and density reactivity
* Update packages
* Update Vuetify to v^3.3.23
* Update docs

## v1.0.0-beta-13
10-03-23
[main] (@webdevnerdstuff)
* Update packages
* Fix bugs due to changes in vuetify data-tables updates
* Fix loading issue on deeper levels
* Add setting to not include Vuetify styles that are not needed


## v1.0.0-beta-10
06-29-23
[main] (@webdevnerdstuff)
* Change default debounceDelay to zero

## v1.0.0-beta-9
06-29-23
[main] (@webdevnerdstuff)
* Fix search not working when using top slot... again

## v1.0.0-beta-8
06-28-23
[main] (@webdevnerdstuff)
* Fix search not working when using top slot

## v1.0.0-beta-7
06-28-23
[main] (@webdevnerdstuff)
* Fix expand icon not expanding row when expandOnClick is true
* Fix issue with colors prop mutating all table settings
* Add some groupBy support
* Adjusting colors prop
* Updated templates
* Updated docs

## v1.0.0-beta-6
06-26-23
[main] (@webdevnerdstuff)
* Fixed rendering functions

## v1.0.0-beta-5
06-23-23
[main] (@webdevnerdstuff)
* Added ability to pass VTextField props and events to bind to the search field
* Added ability to pass props to bind to the VProgressLinear, VProgressCircular, and VSkeletonLoader
* Removed old props no longer used due to adding ability to pass props and events to bind to components
* Updating Playground examples
* Update documentation
* Cleaning up

## v1.0.0-beta-4
06-22-23
[main] (@webdevnerdstuff)
* Added match column widths functionality
* Updating Playground examples
* Update documentation
* Cleaning up

## v1.0.0-beta-3
06-20-23
[main] (@webdevnerdstuff)
* Fixing checkbox functionality
* Updating Playground examples
* Update documentation
* Cleaning up

## v1.0.0-beta-2
06-13-23
[main] (@webdevnerdstuff)
* Adjust entry point
* Update to check for fontawesome to adjust icon size
* Update default `colors` prop to use `primary` color scheme
  * It is easier to change the `colors` to `null` to remove the `colors` than it is to add them in
  * Still undetermined if this will be the default or not
* Add helper for getting item values from a nested object
  * Credits:
    * https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts
    * http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
* Update documentation usage


## v1.0.0-beta-1
Initial beta release.
[main] (@webdevnerdstuff)
