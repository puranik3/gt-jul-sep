# What is Knockout?
    - JS MVVM framework
    - MVVM
        - Model (no presentation concerns)
        - View
        - ViewModel - code representing data + operations on a UI (has partition concerns)
    - Not a replacement for jQuery
    - Can be used in non-SPA apps too

# Features
    - Declarative binding
    - Automatic UI refresh
    - Dependency Tracking
        - Property value changes cascade onto dependent property values
        - Rich templating support

# Getting Started with Knockout
    - Live example: Create a view with a view model
        - What happens when we bind to string properties
        - Overcoming binding issues by using Observables
        - Changing bound data on valueUpdate: 'afterkeydown'
        - Hiding and showing elements
            - We add a checkbox to toggle display state property (observable with boolean value)

# Observables
    - Three types of Observables
        - Regular observable
        - Observable arrays - for collections
        - Computed observables - change on change of dependencies
    - Computed observable
        - Example: Display computed full name
        - Can even react to boolean observable changes
    - Observable Arrays
        - Use with collections
        - Detect changes to collections - add/remove
        - Use Knockout array method
            - Cross-browser
            - Dependency tracking
        - Methods on observable arrays
            - indexOf('value')
            - slice( a, b )
            - push('value')
            - pop()
            - unshift('value')
            - shift()
            - reverse()
            - sort()
            - remove()
            - removeAll()
        - Example: Display array of objects and add/remove objects
            - Also shows template binding with name and foreach property being used

# Bindings
    - Built-in Bindings (5 types)
        - Text and appearance
        - Forms
        - Control Flow
        - Templates
        - Custom bindings
    - Text and appearance
        - visible
        - text
        - html
        - css
        - style
        - attr
        - Example: Todo list using the above bindings
    - Form bindings
        - click
        - submit
        - event - catch all binding - used for any event for which binding is not available - e.g. mouseover
        - enable - DOM element enabled if true
        - disable - DOM element disabled if true
        - value
        - checked - for checkbox/radio
        - options - collection of elements in dropdown or multi-select
        - selectedOptions - currently selected items of dropdown or multi-select
        - Example: Illustration of above bindings - options binding to select input and display od selectedOption
    - Control flow bindings
        - if - executes something in template if condition is true
        - ifnot
        - foreach
        - with
    - Template binding
        - Uses 'template' as the keyword
        - 2 Ways to bind
            - Template given in script tag
                - Uses a third-party template framework like jquery.tmpl
            - Template provided in HTML 
                - Uses Knockout's internal template engine
        - Example 1: Todo list - Templating using scripts
            - Overcoming problem of re-rendering on every change using data-bind (now an object with template property and name and foreach within) on the ul (now moved outside script template) and having li within
        - Example 2: Using native Knockout templating - chaging to data-bind on span within li too
    - Control flow binding to template using plain HTML
        - Example 1: Todo uding comment-based syntax
            <!-- ko foreach: todos -->
            <!-- /ko -->
        - Example 2:
            <ul data-bind="foreach: todos">...</ul>
    - Using ko.dataFor(<DOM node>) and jQuery event delegation to handle delete functionality
    - Using $parent scope to select todo on click of li (store in selectedTodo) and call selectTodo method to store selected (i.e. clicked) DOM node. The selectTodo() is passed the bound item as it is bound via Knockout
        - Other scopes
            - $data
            - $root
            - $parents
    - Using with: selectedTodo on modal dialog to set the bound scope on the dialog. To complete the example, set each of the data items of a todo as observable data.

# References
    - http://knockoutjs.com/
    - Tutorials: http://learn.knockoutjs.com/
    - Documentation: http://knockoutjs.com/documentation/introduction.html
    - blog.stevensanderson.com
    - www.knockmeout.net