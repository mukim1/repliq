import InputSelect from "../../components/Inputs/InputSelect";
import InputThree from "../../components/Inputs/InputThree";
import Textarea from "../../components/Inputs/Textarea";

type Props = {
  errors: any;
  index: number;
  register: any;
  hasMetaInfo: boolean;
};

const Inputs = ({ errors, index, register, hasMetaInfo }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2 mt-2">
        <div className="col-start-1 col-end-4">
          <InputThree
            id={`products[${index}].name`}
            label="Product name"
            name={`products[${index}].name`}
            otherProps={{ register, errors }}
            placeholder="Product name"
          />
        </div>

        <div className=" col-start-4 col-end-7"></div>
      </div>
      <div className="grid grid-cols-6 gap-2">
        <div className=" col-span-3">
          <InputThree
            id={`products[${index}].unit_name`}
            label={"Quantity"}
            type="number"
            name={`products[${index}].quantity`}
            otherProps={{ register, errors, min: 1 }}
          />
        </div>
        <div className=" col-span-3">
          <InputSelect
            id={`products[${index}].quantity_type`}
            label="Quantity type"
            defaultValue="PIECE"
            name={`products[${index}].quantity_type`}
            otherProps={{ register, errors }}
          >
            {quantity_types.map((qt) => (
              <option
                key={qt.id}
                value={qt.name}
                className="dark:text-gray-700"
              >
                {qt.label}
              </option>
            ))}
          </InputSelect>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2">
        <div className=" col-span-3">
          <InputThree
            id={`products[${index}].unit_price`}
            name={`products[${index}].unit_price`}
            otherProps={{ register, errors }}
            label="Unit Price"
            type="number"
          />
        </div>
        <div className=" col-span-3">
          <InputThree
            id={`products[${index}].sell_price`}
            label={"Sell price"}
            type="number"
            name={`products[${index}].sell_price`}
            otherProps={{ register, errors }}
          />
        </div>
      </div>
      {hasMetaInfo && (
        <>
          <InputThree
            id={`products[${index}].meta.title`}
            placeholder="Product Title"
            name={`products[${index}].meta.title`}
            otherProps={{ register, errors }}
            label="Product title"
          />
          <Textarea
            id={`products[${index}].meta.description`}
            placeholder="Product Description"
            name={`products[${index}].meta.description`}
            otherProps={{ register, errors }}
            label="Product description"
            row={3}
          />
          <InputThree
            id={`products[${index}].meta.keywords`}
            placeholder="Meta keywords"
            name={`products[${index}].meta.keywords.0`}
            otherProps={{ register, errors }}
            label="Meta keywords"
          />
        </>
      )}
    </div>
  );
};

export default Inputs;

const quantity_types = [
  { id: "UG", name: "UG", label: "Microgram" },
  { id: "MG", name: "MG", label: "Milligram" },
  { id: "G", name: "G", label: "Gram" },
  { id: "KG", name: "KG", label: "Kilogram" },
  { id: "LB", name: "LB", label: "Pound" },
  { id: "OZ", name: "OZ", label: "Ounce" },
  { id: "L", name: "L", label: "Liter" },
  { id: "ML", name: "ML", label: "Milliliter" },
  { id: "FL_OZ", name: "FL_OZ", label: "Fluid Ounce" },
  { id: "PT", name: "PT", label: "Pint" },
  { id: "QT", name: "QT", label: "Quart" },
  { id: "GAL", name: "GAL", label: "Gallon" },
  { id: "CT", name: "CT", label: "Countable" },
  { id: "FT", name: "FT", label: "Feet" },
  { id: "IN", name: "IN", label: "Inch" },
  { id: "YD", name: "YD", label: "Yard" },
  { id: "CM", name: "CM", label: "Centimeter" },
  { id: "M", name: "M", label: "Meter" },
  { id: "MM", name: "MM", label: "Millimeter" },
  { id: "EA", name: "EA", label: "Each" },
  { id: "PR", name: "PR", label: "Pair" },
  { id: "SET", name: "SET", label: "Set" },
  { id: "PK", name: "PK", label: "Pack" },
  { id: "BX", name: "BX", label: "Box" },
  { id: "BAG", name: "BAG", label: "Bag" },
  { id: "ROLL", name: "ROLL", label: "Roll" },
  { id: "YDS", name: "YDS", label: "Yards" },
  { id: "BTL", name: "BTL", label: "Bottle" },
  { id: "CAN", name: "CAN", label: "Can" },
  { id: "JAR", name: "JAR", label: "Jar" },
  { id: "TUB", name: "TUB", label: "Tub" },
  { id: "BUN", name: "BUN", label: "Bundle" },
  { id: "CS", name: "CS", label: "Case" },
  { id: "CRATE", name: "CRATE", label: "Crate" },
  { id: "DRM", name: "DRM", label: "Drum" },
  { id: "PKG", name: "PKG", label: "Package" },
  { id: "TOTE", name: "TOTE", label: "Tote" },
  { id: "TRAY", name: "TRAY", label: "Tray" },
  { id: "SHT", name: "SHT", label: "Sheet" },
  { id: "SQR_FT", name: "SQR_FT", label: "Square Feet" },
  { id: "SQR_YD", name: "SQR_YD", label: "Square Yard" },
  { id: "SQR_CM", name: "SQR_CM", label: "Square Centimeter" },
  { id: "SQR_M", name: "SQR_M", label: "Square Meter" },
  { id: "SQR_MM", name: "SQR_MM", label: "Square Millimeter" },
  { id: "SQR_IN", name: "SQR_IN", label: "Square Inch" },
  { id: "CUB_FT", name: "CUB_FT", label: "Cubic Feet" },
  { id: "CUB_YD", name: "CUB_YD", label: "Cubic Yard" },
  { id: "CUB_CM", name: "CUB_CM", label: "Cubic Centimeter" },
  { id: "CUB_M", name: "CUB_M", label: "Cubic Meter" },
  { id: "CUB_MM", name: "CUB_MM", label: "Cubic Millimeter" },
  { id: "CUB_IN", name: "CUB_IN", label: "Cubic Inch" },
  { id: "DOZ", name: "DOZ", label: "Dozen" },
  { id: "HR", name: "HR", label: "Hour" },
  { id: "MIN", name: "MIN", label: "Minute" },
  { id: "SEC", name: "SEC", label: "Second" },
  { id: "WK", name: "WK", label: "Week" },
  { id: "MO", name: "MO", label: "Month" },
  { id: "YR", name: "YR", label: "Year" },
  { id: "PIECE", name: "PIECE", label: "Piece" },
  { id: "TBSP", name: "TBSP", label: "Tablespoon" },
  { id: "TSP", name: "TSP", label: "Teaspoon" },
  { id: "CUP", name: "CUP", label: "Cup" },
  { id: "PINCH", name: "PINCH", label: "Pinch" },
  { id: "DASH", name: "DASH", label: "Dash" },
  { id: "DROP", name: "DROP", label: "Drop" },
  { id: "HANDFUL", name: "HANDFUL", label: "Handful" },
  { id: "OTHER", name: "OTHER", label: "Other" },
];
