import { Tabs } from "expo-router";

export default function Layout() {
  return <Tabs />;
}
//From the above example, Slot will render the current child route, think of this like the children prop in React. This component can be wrapped with other components to create a layout.
