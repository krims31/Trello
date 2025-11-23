import { useTheme } from "../theme-context/theme-context";
import styled from "styled-components";
const StyledWrapper = styled.div`
  .theme-checkbox {
    --toggle-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    top: -20px;
    width: 5.25em;
    margin-left: 110px;
    height: 2.125em;
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(50%, #efefef),
        color-stop(50%, #2a2a2a)
      )
      no-repeat;
    background: -o-linear-gradient(left, #efefef 50%, #2a2a2a 50%) no-repeat;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 0;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    border-radius: 99em;
    position: relative;
    cursor: pointer;
    font-size: var(--toggle-size);
  }

  .theme-checkbox::before {
    content: "";
    width: 1.25em;
    height: 1.25em;
    position: absolute;
    top: 0.45em;
    left: 0.438em;
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(50%, #efefef),
        color-stop(50%, #2a2a2a)
      )
      no-repeat;
    background: -o-linear-gradient(left, #efefef 50%, #2a2a2a 50%) no-repeat;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 100%;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  .theme-checkbox:checked::before {
    left: calc(100% - 2.25em - 0.438em);
    background-position: 0;
  }

  .theme-checkbox:checked {
    background-position: 100%;
  }
`;

export default function NightMode() {
  const { theme, toggleTheme } = useTheme();

  console.log("NightMode rendered, theme:", theme);

  return (
    <>
      <button className="text-black -ml-166 mt-90 absolute top-100 text-1xl cursor-pointer transition duration-300 ease-in-out">
        Night mode
        <img
          src="https://cdn-icons-png.flaticon.com/128/4623/4623236.png"
          alt="tasks"
          className="w-6 -mt-7 -ml-10"
        />
        <div className="night">
          <StyledWrapper
            className="w-5 h-5"
            onClick={() => {
              console.log("Button clicked");
              toggleTheme();
            }}
          >
            <input
              type="checkbox"
              className="theme-checkbox w-4 h-4"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
          </StyledWrapper>
        </div>
      </button>
    </>
  );
}
