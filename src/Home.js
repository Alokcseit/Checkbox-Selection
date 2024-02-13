import React from "react";
import { useState } from "react";
function Home() {
  const [checked, setChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  return (
    <>
      <div>checkbox</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "200px",
        }}
      >
        <div>
          <input
            type="checkbox"
            onChange={
              () => {
                const allChecked = Object.values(checked).every(
                  (value) => value
                );
                const newCheckedState = {};

                for (let key in checked) {
                  newCheckedState[key] = !allChecked;
                }

                setChecked(newCheckedState);
              }
              //   setChecked({
              //     ...checked,
              //     checkbox1: !checked.checkbox1,
              //     checkbox2: !checked.checkbox2,
              //     checkbox3: !checked.checkbox3,
              //     checkbox4: !checked.checkbox4,
              //     checkbox5: !checked.checkbox5,
              //   })
            }
            checked={
              checked.checkbox1 &&
              checked.checkbox2 &&
              checked.checkbox3 &&
              checked.checkbox4 &&
              checked.checkbox5
            }
          />
          <label>select all</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => {
              setChecked({
                ...checked,
                checkbox1: !checked.checkbox1,
              });
            }}
            checked={checked.checkbox1}
          />
          <label>checkbox1</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({
                ...checked,
                checkbox2: !checked.checkbox2,
              })
            }
            checked={checked.checkbox2}
          />
          <label>checkbox2</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({ ...checked, checkbox3: !checked.checkbox3 })
            }
            checked={checked.checkbox3}
          />
          <label>checkbox3</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({ ...checked, checkbox4: !checked.checkbox4 })
            }
            checked={checked.checkbox4}
          />
          <label>checkbox4</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({ ...checked, checkbox5: !checked.checkbox5 })
            }
            checked={checked.checkbox5}
          />
          <label>checkbox5</label>
        </div>
      </div>
    </>
  );
}

export default Home;
