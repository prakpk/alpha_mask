// Import your custom UI components
import DropdownComponent from './DropdownComponent';
import TextInputComponent from './TextInputComponent';
// ... import other necessary components

// A simple component map that links schema types to React components
const componentMap = {
  dropdown: DropdownComponent,
  textInput: TextInputComponent,
  // ... add other mappings
};

// The parser component
function CheckoutParser({ schema }) {
  // Function to determine if the device is mobile
  const isMobile = window.innerWidth < 768; // example breakpoint for mobile

  // Function to render each element
  function renderElement(element) {
    const Component = componentMap[element.type];
    if (!Component) return null;

    // Combine base styles with mobile overrides if on a mobile device
    const combinedStyles = {
      ...element.style,
      ...(isMobile ? element.mobileStyles : {})
    };

    // Rest of your render logic...
    return (
      <Component
        key={element.id}
        {...element.props}
        style={combinedStyles}
      >
        {/* Recursive rendering logic for child components */}
      </Component>
    );
  }

  // Render the checkout form
  return <div>{schema.map(renderElement)}</div>;
}


export default CheckoutParser;
