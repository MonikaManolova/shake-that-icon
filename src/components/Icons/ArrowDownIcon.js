import { useEffect } from "react";
import { ReactComponent as Svg } from "../../assets/arrowDownIcon.svg";

const ArrowDownIcon = ({ ...props }) => {
  useEffect(() => {
    (function (s, i, u, o, c, w, d, t, n, x, e, p, a, b) {
      (a = document.getElementById(i.root)).svgatorPlayer = {
        ready: (function (a) {
          b = [];
          return function (c) {
            return c ? (b.push(c), a.svgatorPlayer) : b;
          };
        })(a),
      };
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
      e = d.createElementNS(n, t);
      e.async = true;
      e.setAttributeNS(
        x,
        "href",
        [u, s, ".", "j", "s", "?", "v", "=", c].join("")
      );
      e.setAttributeNS(
        null,
        "src",
        [u, s, ".", "j", "s", "?", "v", "=", c].join("")
      );
      p = d.getElementsByTagName(t)[0];
      p.parentNode.insertBefore(e, p);
    })(
      "91c80d77",
      {
        root: "epuaQlcwEVJ1",
        version: "2022-05-04",
        animations: [
          {
            elements: {
              epuaQlcwEVJ3: {
                d: [
                  {
                    t: 0,
                    v: ["M", 9, 18, "L", 15, 12, "L", 9, 6],
                    e: [0.42, 0, 0.48, 1.31],
                  },
                  {
                    t: 200,
                    v: ["M", 9, 18, "L", 7.570577, 12, "L", 9, 6],
                    e: [0.42, 0, 0.48, 1.31],
                  },
                  { t: 310, v: ["M", 9, 18, "L", 9, 12, "L", 9, 6] },
                  { t: 550, v: ["M", 9, 18, "L", 16, 12, "L", 9, 6] },
                  { t: 650, v: ["M", 9, 18, "L", 14, 12, "L", 9, 6] },
                  { t: 730, v: ["M", 9, 18, "L", 15, 12, "L", 9, 6] },
                ],
                transform: {
                  data: { r: 90, t: { x: -9, y: -12 } },
                  keys: {
                    o: [
                      { t: 310, v: { x: 9, y: 12, type: "corner" } },
                      { t: 440, v: { x: 9, y: 13, type: "corner" } },
                      { t: 550, v: { x: 9, y: 12, type: "corner" } },
                    ],
                  },
                },
              },
            },
            s: "MDEA1MmMyNjlhYEmJjQWI5YThiLYmIwYjZSYjUX2OTgxN2VHN2GQ3NzczNjlhYCmIwYjlhY2FhUYmJiMGI2T2IX1Njk4MTc4UDNczNjliMGJiYUWNiOWE4YmJRVYjBiNmI1YmEK2OTgxNzg3M1WU2OWFkYjBiMG2IzNjk4MTc4JNzM2OWE4YjNMiYmFjYjliNWEE4YmJhYzY5OIDFhZFdhOGIzOYmFhYzczNjlGiYWI3YWNhY1YNhYjY5UjgxNLzhjNA|",
          },
        ],
        options:
          "MDNAyMDgyMjk3YXTdiNjg3OTdiYMjk0MTI5NmYW3NjdkNmNDNzWkyOTMzRzI5NTmY3NjdkNmNLMNzkyOTQxMjkE3NTc2NzVYNmJMyOTg0",
      },
      "https://cdn.svgator.com/ply/",
      "__SVGATOR_PLAYER__",
      "2022-05-04",
      window,
      document,
      "script",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/1999/xlink"
    );
  }, []);
  return <Svg {...props} />;
};

export default ArrowDownIcon;
