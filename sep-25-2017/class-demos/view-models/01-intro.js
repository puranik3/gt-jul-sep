// like Angular's component.ts file (ViewModel/Controller)
function IntroViewModel() {
    this.name = ko.observable('John');
    this.isNameVisible = ko.observable( true )
}

var viewModel = new IntroViewModel();