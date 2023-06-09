import * as React from "react";
import Cta from "./cta";
import { Address } from "@yext/pages/components";

export const Details = (props: any) => {
  const { address, phone } = props;

  return (
    <>
      <div className="grid">
        <div className="text-xl font-semibold">Store Details</div>
        <div className="grid grid-cols-2 py-4">
          <div>
            <Address address={address} />
            <div className="pt-4">
              <a href="#">(347) 491-9787</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

