import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Jj`.
 */
export type JjProps = SliceComponentProps<Content.JjSlice>;

/**
 * Component for "Jj" Slices.
 */
const Jj = ({ slice }: JjProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for jj (variation: {slice.variation}) Slices
    </section>
  );
};

export default Jj;
