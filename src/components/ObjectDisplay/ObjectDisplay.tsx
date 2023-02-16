import { useState } from "react";

type HandledTypes =
  | boolean
  | string
  | number
  | null
  | unknown
  | Record<string, unknown>
  | Array<unknown>;

type Props = {
  json: Record<string, HandledTypes> | Array<unknown>;
};

export const ObjectDisplay: React.FC<Props> = ({ json }) => {
  const [open, setOpen] = useState(false);
  const jsonAsTuples = Object.entries(json);
  function toggleExpandObject() {
    setOpen((val) => !val);
  }
  return (
    <div data-testid="object-display">
      <button onClick={() => toggleExpandObject()}>
        {open ? "Close" : "Expand"}
      </button>
      <pre>{JSON.stringify(json)}</pre>
      {open &&
        jsonAsTuples.map((tuple) => (
          <div className="item-center flex ">
            <div className="mr-2 font-bold text-blue-600">{tuple[0]}:</div>

            <div>
              <ObjectDisplayProperty value={tuple[1]} />
            </div>
          </div>
        ))}
    </div>
  );
};

export const ObjectDisplayProperty: React.FC<{
  value: HandledTypes;
}> = ({ value }) => {
  switch (typeof value) {
    case "string":
      return <div className="text-teal-600">"{value}"</div>;
    case "boolean":
      return <div className="text-purple-700">{value.toString()}</div>;
    case "number":
      return <div className="text-purple-700">{value}</div>;
    case "object":
      if (value) {
        return <ObjectDisplay json={value as Record<string, unknown>} />;
      }
      return <div className="text-gray-500">null</div>;
    default:
      return <div>{JSON.stringify(value)}</div>;
  }
};
