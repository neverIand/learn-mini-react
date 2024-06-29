import { it, expect, describe } from "vitest";
import React from "../core/React";

describe("createElement", () => {
  it("prop is null", () => {
    const el = React.createElement("div", null, "hi");

    expect(el).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "hi",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
        },
        "type": "div",
      }
    `);

    // expect(el).toEqual({
    //   type: "div",
    //   props: {
    //     children: [
    //       {
    //         type: "TEXT_ELEMENT",
    //         props: {
    //           nodeValue: "hi",
    //           children:[]
    //         },
    //       },
    //     ],
    //   },
    // });
  });

  it("should return a vdom with element id", () => {
    const el = React.createElement("div", { id: "testId" }, "hi");

    expect(el).toMatchInlineSnapshot(`
  {
    "props": {
      "children": [
        {
          "props": {
            "children": [],
            "nodeValue": "hi",
          },
          "type": "TEXT_ELEMENT",
        },
      ],
      "id": "testId",
    },
    "type": "div",
  }
`);
  });
});
