1. The concept of using <ng-content/> as a `placeholder` for the wrapped content is also called `Content Projection`

2. Component selectors https://angular.dev/guide/components/selectors
   **Types of selectors:**
   | Selector type | Description | Examples |
   |:----------------------------------| :-----------------------------------------------------------| :----------: |
   |`Type selector` | Matches elements based on their HTML tag name, or node name.| `profile-photo` |
   |`Attribute selector` | Matches elements based on the presence of an HTML attribute and, optionally, an exact value for that attribute. |`[dropzone]` `[type="reset"]` |
   |`Class selector` | Matches elements based on the presence of a CSS class. | `.menu-item` |

3. Making component styles available (global):
   @Component({
   selector: 'app-control',
   standalone: true,
   imports: [],
   templateUrl: './control.component.html',
   styleUrl: './control.component.css',
   `encapsulation: ViewEncapsulation.None,` [<-- Makes component's styles global -->]
   })
   export class ControlComponent { }

4. The component host element is NOT considered a part of the component styles via `:host`

5. Adding class or other property to the host element:
   @Component({
   selector: 'app-control',
   standalone: true,
   imports: [],
   templateUrl: './control.component.html',
   styleUrl: './control.component.css',
   encapsulation: ViewEncapsulation.None,
   `host`: {
   class: 'control',
   }, [<-- `host` Allows adding any key-value pairs to component -->]
   })
   export class ControlComponent { }

6. `View` is an internally managed data structure that `holds references` to the `DOM elements` rendered by a component.
7. `Content` is a some `other (partial) View` data structure projected into component's View. (Ex: <ng-content>)
