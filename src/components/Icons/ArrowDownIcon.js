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
        root: "e8BioH2vUWx1",
        version: "2022-05-04",
        animations: [
          {
            elements: {
              e8BioH2vUWx3: {
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
            s: "MDFA1MmE0NGI4ZPDllWDliOGE5JZDkyOTg5NzRSiNjM2MDVmNTRk1NTRiOGQ5MRjliOGU4YzlkPOTI5ODk3NGIA2MzVhRjU1NGMI5MjlkOGU5YDjhhOWQ5Mjk4HOTc5YzRiWDYLzNWE1NTRiOGUY5Mjk1OTU0YHjYzNWE1NTRiHOGE5NTlkOGUV5Yjk3OGE5ZDYhlNGI2M1U4ZSjhhOTU5YzhlGNTU0YjljOTkC4ZThlRDhkUDFRiNjM1YWE2",
          },
        ],
        options:
          "MDFAyMDgyMjk3YNTdiNjg3OTdiBMjlQNDEyOTZKmNzZSN2Q2YzLc5MjkzMzI5NPmZRNzY3ZDZjQNzkyOVE0MTIC5NzU3Njc1VDMZjMjk4NEU/",
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
