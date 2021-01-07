import { ImageProps, ContainerProps } from "@widgets-resources/piw-utils";
import { FloatingActionButtonPreviewProps } from "../typings/FloatingActionButtonProps";
import { StructurePreviewFloatingActionButtonPrimarySVG } from "./assets/StructurePreviewFloatingActionButtonPrimary";

const rowLayoutContainer: ContainerProps = { type: "Container", children: [] };
const rowLayoutImage: ImageProps = {
    type: "Image",
    document: StructurePreviewFloatingActionButtonPrimarySVG,
    data: "",
    width: 32,
    height: 32
};

export const getPreview = (values: FloatingActionButtonPreviewProps) => ({
    type: "RowLayout",
    borders: false,
    padding: 8,
    columnSize: "grow",
    children: (() => {
        switch (values.horizontalPosition) {
            case "left":
                return [rowLayoutImage];
            case "center":
                return [rowLayoutContainer, rowLayoutImage, rowLayoutContainer];
            case "right":
                return [rowLayoutContainer, rowLayoutImage];
        }
    })()
});
