import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react"
import "./HeaderSearch.scss";
const algoliaPlaces = require('places.js');


export const HeaderSearch = () => {
  const inputRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    algoliaPlaces({
      container: inputRef.current
    });
  }, [])

  const headerClasses = classNames(
    "app-header",
    isCollapsed && "app-header--collapsed"
  )

  return (
    <header className={headerClasses}>
      <button className="collapse-icon" onClick={() => setIsCollapsed(prevIsCollapsed => !prevIsCollapsed)}>
        <FontAwesomeIcon icon={isCollapsed ? "window-maximize" : "times"} size="sm" />
      </button>

      <div className="search-wrapper">
        <input ref={inputRef} placeholder="Search address here.."/>
      </div>
    </header>
  )
}
