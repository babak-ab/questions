import HorizontalLayout from "./HorizontalLayout";
import logo from "../assets/react.svg";
import VerticalLayout from "./VerticalLayout";
export default function Headers() {
  return (
    <VerticalLayout border={false} fillWidth={true} align="left" spacing="4">
      <HorizontalLayout
        border={false}
        fillWidth={true}
        align="left"
        spacing="4"
      >
        <img src={logo} alt="Logo" className="h-20 w-20 object-contain" />
        <h1 className="text-2xl/7 font-bold  sm:truncate sm:text-3xl sm:tracking-tight">
          Questions
        </h1>
      </HorizontalLayout>
      <div className="border-t border-gray-400 w-full my-2"></div>
    </VerticalLayout>
  );
}
