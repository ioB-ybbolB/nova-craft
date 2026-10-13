import {
  React, jsxRuntime, ReactDefault, ReactDOM, useDrag, useDrop,
  DndProvider, HTML5Backend, TouchBackend, ParticleBackground, generateUUID
} from './vendor-runtime.js';
import { ELEMENT_DEFINITIONS } from './game-elements.js';

const gameData = { elements: ELEMENT_DEFINITIONS };

const DraggableElement = ({ id: itemId, element: element, position: position = { x: 0, y: 0 }, onMove: onMove, onMoveDrop: onMoveDrop, onDrop: onDrop, onRightClick: onRightClick, onDoubleClick: onDoubleClick, className: className }) => {
  const elementRef = React.useRef(null),
    [h, d] = React.useState(!1),
    [{ isDragging: isDragging }, dragSource] = useDrag({
      type: "element",
      item: { id: itemId, element: element, position: position },
      collect: c => ({ isDragging: c.isDragging() }),
      end: () => {
        onMoveDrop && onMoveDrop(itemId)
      }
    }),
    [, dropTarget] = useDrop({      
accept: "element", drop: c => {
        c && c.id !== itemId && onDrop(c, itemId)
      }    
});
  dragSource(dropTarget(elementRef));
  const handleMouseDown = c => {
    c.stopPropagation(), d(!0), c.clientX, c.clientY
  },
    handleContextMenu = React.useCallback(c => {
      c.preventDefault(), onRightClick && onRightClick(itemId)
    }, [itemId, onRightClick]),
    handleDoubleClick = React.useCallback(() => {
      onDoubleClick && onDoubleClick(itemId)
    }, [itemId, onDoubleClick]);
  return jsxRuntime.jsxs("div", {
    ref: elementRef,
    className: `dropped-item ${className}`,
    style: { transform: `translate(${position.x}px, ${position.y}px)`, cursor: "pointer", opacity: isDragging ? .5 : 1 },
    onMouseDown: handleMouseDown,
    onContextMenu: handleContextMenu,
    onDoubleClick: handleDoubleClick,
    children: [element.emoji, " ", element.name]
  })
},
  CanvasWorkspace = ({ elementsData: elementsData, onNewCombination: onNewCombination, setClearDropZoneRef: setClearDropZoneRef, addItemToDropZone: addItemToDropZone }) => {
    const [placedItems, setPlacedItems] = React.useState([]),
      [animationClass, setAnimationClass] = React.useState(""),
      dropZoneRef = React.useRef(null),
      canvasRef = React.useRef(null),
      [animation, setAnimation] = React.useState({ url: null, position: { x: 0, y: 0 }, visible: !1 }),
      itemWidth = 50,
      itemHeight = 50,
      newUniqueId = E => {
        let O,
          N = !1;
        for (; !N;)O = generateUUID(), N = !E.some(_ => _.id === O);
        return O
      },
      showCombinationAnimation = E => {
        const O = { x: E.x - -20, y: E.y - 25 };
        setAnimation({ url: "./assets/pinwheel.png", position: O, visible: !0 }), setAnimationClass("rotate"), setTimeout(() => {
          setAnimation({ url: null, position: { x: 0, y: 0 }, visible: !1 }), setAnimationClass("")
        }, 3e3)
      };
    addItemToDropZone.current = E => {
      const O = placedItems.length,
        N = getRadialPosition(O, placedItems.length + 1),
        _ = { id: newUniqueId(placedItems), element: E, position: N };
      setPlacedItems(I => [...I, _])
    };
    const [{ isOver: isOver, canDrop: canDrop }, dropTarget] = useDrop({
      accept: "element",
      drop: (E, O) => {
        const N = dropZoneRef.current.getBoundingClientRect(),
          _ = O.getClientOffset();
        if (!_) return;
        const I = _.x - N.left - itemWidth / 2,
          ie = _.y - N.top - itemHeight / 2,
          U = placedItems.findIndex(v => v.id === E.id);
        if (U !== -1) {
          const v = [...placedItems];
          v[U] = { ...v[U], position: { x: I, y: ie } }, setPlacedItems(v)
        } else {
          const v = { id: newUniqueId(placedItems), element: E.element, position: { x: I, y: ie } };
          setPlacedItems(F => [...F, v])
        }
      },
      collect: E => ({ isOver: E.isOver(), canDrop: E.canDrop() })
    });
    React.useEffect(() => {
      const E = canvasRef.current,
        O = E.getContext("2d");
      (() => {
        if (O) {
          O.clearRect(0, 0, E.width, E.height), O.strokeStyle = "#fff", O.lineWidth = .5;
          for (let _ = 0; _ < placedItems.length; _++)for (let I = _ + 1; I < placedItems.length; I++) {
            const ie = placedItems[_],
              U = placedItems[I];
            O.beginPath(), O.moveTo(ie.position.x + itemWidth / 2, ie.position.y + itemHeight / 2), O.lineTo(U.position.x + itemWidth / 2, U.position.y + itemHeight / 2), O.stroke()
          }
        }
      })()
    }, [placedItems]);
    const f = (E, O) => { },
      b = E => { },
      combineElements = (E, O) => {
        const N = placedItems.find(U => U.id === O);
        if (!N) return;
        const _ = placedItems.filter(U => U.id !== N.id && U.id !== E.id);
        let I = null,
          ie = elementsData.elements.filter(U => U.combinations && U.combinations.some(([v, F]) => E.element.name === v && N.element.name === F || E.element.name === F && N.element.name === v));
        if (ie.length > 0) {
          let U = Math.floor(Math.random() * ie.length);
          I = ie[U]
        } else I = null;
        if (I == null) {
          Math.floor(Math.random() * 10) < 3 ? I = N.element.id > E.element.id ? E.element : N.element : I = N.element.id > E.element.id ? N.element : E.element;
          const v = elementsData.elements.find(F => F.id === I.id);
          if (v.combinations != null && v.combinations.length > 0) {
            const F = Math.floor(Math.random() * v.combinations.length),
              A = v.combinations[F];
            if (A != null && A.length > 0) {
              const q = Math.floor(Math.random() * A.length),
                te = A[q];
              let H = elementsData.elements.find(Q => Q.name === te);
              H != null && (I = H)
            }
          }
        }
        if (I) {
          const U = N.position,
            v = { id: newUniqueId(placedItems), element: I, position: U };
          console.log("combinedElement " + I.id), setPlacedItems([..._, v]), onNewCombination(I) === !0 && showCombinationAnimation(U)
        } else console.log("No valid combination found."), onNewCombination(null)
      },
      removeItem = E => {
        const O = placedItems.filter(N => N.id !== E);
        setPlacedItems(O)
      },
      duplicateItem = E => {
        const O = placedItems.find(N => N.id === E);
        if (O) {
          const N = newUniqueId(placedItems),
            _ = { x: O.position.x + 20, y: O.position.y + 20 },
            I = { id: N, element: O.element, position: _ };
          setPlacedItems(ie => [...ie, I])
        }
      },
      getDropZoneCenter = () => {
        const E = dropZoneRef.current.getBoundingClientRect(),
          O = E.width / 2,
          N = E.height / 2;
        return { x: O, y: N }
      },
      getRadialPosition = (E, O, N = 100) => {
        const _ = E / O * 2 * Math.PI,
          I = getDropZoneCenter();
        return { x: I.x + N * Math.cos(_), y: I.y + N * Math.sin(_) }
      },
      clearDropZone = () => {
        setPlacedItems([])
      };
    return React.useEffect(() => {
      setClearDropZoneRef && setClearDropZoneRef(clearDropZone)
    }, [setClearDropZoneRef]), jsxRuntime.jsxs("div", {
      ref: E => {
        dropZoneRef.current = E, dropTarget(E)
      },
      className: `drop-zone ${isOver ? "over" : ""} ${canDrop ? "can-drop" : ""}`,
      style: { position: "relative", width: "100%", height: "100vh" },
      children: [jsxRuntime.jsx("canvas", {
        ref: canvasRef,
        width: dropZoneRef.current ? dropZoneRef.current.clientWidth : 0,
        height: dropZoneRef.current ? dropZoneRef.current.clientHeight : 0,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none"
        }
      }), animation.visible && jsxRuntime.jsx("img", {
        src: animation.url,
        alt: "Temporary Background",
        className: animationClass,
        style: {
          position: "absolute",
          left: `${animation.position.x}px`,
          top: `${animation.position.y}px`,
          width: "100px",
          height: "100px",
          pointerEvents: "none"
        }
      }), placedItems.map(E => jsxRuntime.jsx(DraggableElement, {
        id: E.id,
        element: E.element,
        position: E.position,
        onMove: f,
        onMoveDrop: b,
        onDrop: combineElements,
        onRightClick: () => removeItem(E.id),
        onDoubleClick: duplicateItem,
        style: {
          position: "absolute",
          width: `${itemWidth}px`,
          height: `${itemHeight}px`,
          transform: `translate(${E.position.x}px, ${E.position.y}px)`
        }
      }, E.id))]
    })
  },
  CreativityBox = React.forwardRef(({ elementsData: elementsData, onNewCombination: onNewCombination, addItemToDropZone: addItemToDropZone, setDroppedItemInParent: setDroppedItemInParent }, forwardedRef) => {
    const [placedItem, setPlacedItem] = React.useState(null),
      boxRef = React.useRef(null),
      [animationClass, setAnimationClass] = React.useState(""),
      [animation, setAnimation] = React.useState({ url: null, position: { x: 0, y: 0 }, visible: !1 }),
      itemWidth = 50,
      itemHeight = 50,
      getCenterPosition = () => {
        if (!boxRef.current) return { x: 0, y: 0 };
        const C = boxRef.current.getBoundingClientRect(),
          x = C.width / 2 - itemWidth / 2,
          R = C.height / 2 - itemHeight / 2;
        return { x, y: R }
      },
      [{ isOver: isOver, canDrop: canDrop }, dropTarget] = useDrop({        
accept: "element", drop: (C, x) => {
          if (placedItem) combineInBox(C); else {
            const R = getCenterPosition(),
              E = { id: generateUUID(), element: C.element, position: R };
            setPlacedItem(E), setDroppedItemInParent(E), onNewCombination(E.element)
          }
        }      
}),
      c = (C, x) => { },
      f = C => {
        placedItem != null && placedItem.id == C && (console.log("remove item from box"), setPlacedItem(null), setDroppedItemInParent(null))
      },
      b = (C, x) => { },
      combineInBox = C => {
        if (console.log("doDropItem " + C.id), placedItem == null || C == null || placedItem.id == C.id) return;
        const x = getCenterPosition();
        let R = C,
          E = null,
          O = elementsData.elements.filter(N => N.combinations && N.combinations.some(([_, I]) => placedItem.element.name === _ && R.element.name === I || placedItem.element.name === I && R.element.name === _));
        if (O.length > 0) {
          let N = Math.floor(Math.random() * O.length);
          E = O[N]
        } else E = null;
        if (E == null) {
          Math.floor(Math.random() * 10) < 3 ? E = R.element.id > placedItem.element.id ? placedItem.element : R.element : E = R.element.id > placedItem.element.id ? R.element : placedItem.element;
          const _ = elementsData.elements.find(I => I.id === E.id);
          if (_.combinations != null && _.combinations.length > 0) {
            const I = Math.floor(Math.random() * _.combinations.length),
              ie = _.combinations[I];
            if (ie != null && ie.length > 0) {
              const U = Math.floor(Math.random() * ie.length),
                v = ie[U];
              let F = elementsData.elements.find(A => A.name === v);
              F != null && (E = F)
            }
          }
        }
        if (E) {
          R.position;
          const N = { id: generateUUID(), element: E, position: x };
          console.log("combinedElement " + E.id), onNewCombination(E) === !0 && showCombinationAnimation(x), setPlacedItem(N), setDroppedItemInParent(N)
        } else console.log("No valid combination found."), onNewCombination(null)
      };
    React.useImperativeHandle(forwardedRef, () => ({ doDropItem: combineInBox, handleItemRemove: removeItem }));
    const removeItem = () => {
      setPlacedItem(null), setDroppedItemInParent(null)
    },
      showCombinationAnimation = C => {
        const x = { x: C.x - 35, y: C.y - 35 };
        setAnimation({ url: "./assets/pinwheel.png", position: x, visible: !0 }), setAnimationClass("rotate"), setTimeout(() => {
          setAnimation({ url: null, position: { x: 0, y: 0 }, visible: !1 }), setAnimationClass("")
        }, 3e3)
      };
    return jsxRuntime.jsxs("div", {
      ref: C => {
        boxRef.current = C, dropTarget(C)
      },
      className: `drop-zone ${isOver ? "over" : ""} ${canDrop ? "can-drop" : ""}`,
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        border: "2px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [animation.visible && jsxRuntime.jsx("img", {
        src: animation.url,
        alt: "Temporary Background",
        className: animationClass,
        style: {
          position: "absolute",
          left: `${animation.position.x}px`,
          top: `${animation.position.y}px`,
          width: "120px",
          height: "120px",
          pointerEvents: "none"
        }
      }), placedItem && jsxRuntime.jsx("div", {
        style: {
          position: "absolute",
          top: `${placedItem.position.y}px`,
          left: `${placedItem.position.x}px`,
          width: `${itemWidth}px`,
          height: `${itemHeight}px`,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          display: "contents",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          border: "1px solid black"
        },
        children: jsxRuntime.jsx(DraggableElement, {
          id: placedItem.id,
          element: placedItem.element,
          onMove: c,
          onMoveDrop: f,
          onDrop: b,
          onRightClick: () => removeItem()
        }, placedItem.id)
      }), !placedItem && jsxRuntime.jsx("div", { children: "Creativity Box" })]
    })
  }),
  SidebarElement = ({ element: element, hiddenItems: hiddenItems, onRemove: onRemove, isDeleteMode: isDeleteMode, onClick: onClick }) => {
    const [isHidden, setIsHidden] = React.useState(!1);
    React.useEffect(() => {
      setIsHidden(hiddenItems.has(element.id))
    }, [hiddenItems, element.id]);
    const [{ isDragging: isDragging }, dragSource] = useDrag(() => ({ type: "element", item: { element: element }, collect: d => ({ isDragging: !!d.isDragging() }) })),
      toggleHidden = () => {
        setIsHidden(!isHidden), onRemove(element.id, !isHidden)
      },
      handleClick = () => {
        isDeleteMode || (console.log("Element clicked inside Element component:", element), onClick(element))
      };
    return jsxRuntime.jsxs("div", {
      ref: dragSource,
      className: `item ${isHidden ? "item-hidden" : ""}`,
      style: { opacity: isDragging ? .5 : 1 },
      onClick: handleClick,
      children: [jsxRuntime.jsx("span", { className: "item-emoji", children: element.emoji }), " ", element.name, isDeleteMode && jsxRuntime.jsx("div", { className: "item-remove", onClick: toggleHidden })]
    })
  },
  to = e => {
    new Audio(e).play()
  },
  oo = ["time", "name", "emoji"],
  CraftingGame = () => {
    const [starterElements, setStarterElements] = React.useState(() => gameData.elements.filter(H => ["Water", "Fire", "Wind", "Earth"].includes(H.name))),
      [discoveredElements, setDiscoveredElements] = React.useState(() => JSON.parse(localStorage.getItem("combinations")) || []),
      [discoveredIds, setDiscoveredIds] = React.useState(new Set(discoveredElements.map(H => H.id))),
      clearDropZoneRef = React.useRef(null),
      addItemToDropZoneRef = React.useRef(null),
      isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      [hiddenItems, setHiddenItems] = React.useState(new Set(JSON.parse(localStorage.getItem("hiddenItems")) || [])),
      [searchTerm, setSearchTerm] = React.useState(""),
      [sortField, setSortField] = React.useState(oo[0]),
      [deleteMode, setDeleteMode] = React.useState(!1),
      [settingsOpen, setSettingsOpen] = React.useState(!1),
      dragDropBackend = isMobile ? TouchBackend : HTML5Backend,
      [boxedItem, setBoxedItem] = React.useState(null),
      creativityBoxRef = React.useRef(null),
      updateBoxedItem = H => {
        setBoxedItem(H)
      };
    React.useEffect(() => {
      localStorage.setItem("hiddenItems", JSON.stringify(Array.from(hiddenItems)))
    }, [hiddenItems]);
    const registerNewElement = H => {
      if (discoveredIds.has(H.id) || discoveredElements.some(ke => ke.name === H.name) || H.id >= 1 && H.id <= 4) return to("./sounds/message-pop-up.mp3"), !1;
      to("./sounds/modern-new-alert-2.mp3"), console.log("handleNewCombination " + H.id);
      const Q = [...discoveredElements, H];
      return setDiscoveredElements(Q), setDiscoveredIds(new Set([...discoveredIds, H.id])), localStorage.setItem("combinations", JSON.stringify(Q)), !0
    },
      clearDropZone = () => {
        clearDropZoneRef.current && clearDropZoneRef.current(), creativityBoxRef.current && creativityBoxRef.current.handleItemRemove()
      },
      resetGame = () => {
        window.confirm("Are you sure you want to reset? This will clear all saved combinations.") && (localStorage.removeItem("combinations"), localStorage.removeItem("hiddenItems"), setDiscoveredElements([]), setDiscoveredIds(new Set), setHiddenItems(new Set), window.location.reload())
      },
      openMoreGames = () => {
        let H = atob("aHR0cHM6Ly9mcmVlemVub3ZhLmNvbQ==");
        window.open(H, "_blank")
      },
      toggleDeleteMode = () => {
        setDeleteMode(H => !H)
      },
      updateHiddenItems = (H, Q) => {
        setHiddenItems(ke => {
          const ce = new Set(ke);
          return Q ? ce.add(H) : ce.delete(H), localStorage.setItem("hiddenItems", JSON.stringify(Array.from(ce))), ce
        })
      },
      filteredElements = starterElements.concat(discoveredElements).filter(H => H.name.toLowerCase().includes(searchTerm.toLowerCase())),
      getElementCount = () => starterElements.concat(discoveredElements).length,
      clearSearch = () => {
        setSearchTerm("")
      },
      cycleSortOrder = () => {
        const Q = (oo.indexOf(sortField) + 1) % oo.length;
        setSortField(oo[Q])
      },
      sortedElements = [...filteredElements].sort((H, Q) => sortField === "time" ? new Date(Q.createdAt) - new Date(H.createdAt) : sortField === "name" ? H.name.localeCompare(Q.name) : sortField === "emoji" ? H.emoji.localeCompare(Q.emoji) : 0),
      handleElementClick = H => {
        if (H != null && boxedItem != null) {
          if (creativityBoxRef.current) {
            const Q = { id: generateUUID(), element: H };
            creativityBoxRef.current.doDropItem(Q)
          }
        } else addItemToDropZoneRef.current && addItemToDropZoneRef.current(H)
      },
      toggleSettings = () => {
        setSettingsOpen(!settingsOpen)
      },
      exportGameState = () => {
        const H = { combinations: discoveredElements, hiddenItems: Array.from(hiddenItems) },
          Q = new Blob([JSON.stringify(H)], { type: "application/json" }),
          ke = URL.createObjectURL(Q),
          ce = document.createElement("a");
        ce.href = ke, ce.download = "game-state.json", ce.click(), URL.revokeObjectURL(ke)
      },
      importGameState = H => {
        const Q = H.target.files[0];
        if (Q) {
          const ke = new FileReader;
          ke.onload = ce => {
            try {
              const Qe = JSON.parse(ce.target.result);
              setDiscoveredElements(Qe.combinations || []), setDiscoveredIds(new Set((Qe.combinations || []).map(Od => Od.id))), setHiddenItems(new Set(Qe.hiddenItems || [])), localStorage.setItem("combinations", JSON.stringify(Qe.combinations || [])), localStorage.setItem("hiddenItems", JSON.stringify(Qe.hiddenItems || [])), toggleSettings()
            } catch {
              alert("Failed to load game state. Please check the file format.")
            }
          }, ke.readAsText(Q)
        }
      };
    return jsxRuntime.jsx(DndProvider, {
      backend: dragDropBackend,
      children: jsxRuntime.jsxs("div", {
        className: "app-container",
        children: [jsxRuntime.jsx(ParticleBackground, {}), jsxRuntime.jsxs("div", {
          className: "content",
          children: [jsxRuntime.jsxs("div", {
            className: "sidebar",
            children: [jsxRuntime.jsxs("div", {
              className: "sidebar-inner",
              children: [!settingsOpen && jsxRuntime.jsx("div", {
                className: `items ${deleteMode ? "is-delete-mode" : ""}`,
                style: { display: settingsOpen ? "none" : "block" },
                children: jsxRuntime.jsxs("div", {
                  className: "items-inner",
                  children: [sortedElements.length === 0 && jsxRuntime.jsxs("div", {
                    className: "empty-sidebar",
                    children: [jsxRuntime.jsx("img", { src: "./assets/magic.svg", className: "empty-sidebar-icon", alt: "No items" }), "No items"]
                  }), sortedElements.map(H => jsxRuntime.jsx(SidebarElement, {
                    element: H,
                    hiddenItems: hiddenItems,
                    onRemove: updateHiddenItems,
                    isDeleteMode: deleteMode,
                    onClick: () => handleElementClick(H)
                  }, H.id))]
                })
              }), settingsOpen && jsxRuntime.jsxs("div", {
                className: "settings-menu",
                children: [jsxRuntime.jsx("div", { style: { textAlign: "center", color: "white", marginTop: "5px" }, children: "Nova Craft" }), jsxRuntime.jsx("div", { style: { marginTop: "40px" }, children: " " }), jsxRuntime.jsx("button", { className: "settings-button", onClick: exportGameState, children: "Save Game State" }), jsxRuntime.jsxs("div", {
                  className: "load-game-container",
                  style: { marginTop: "10px" },
                  children: [jsxRuntime.jsx("label", { className: "load-game-label", children: "Load Game State:" }), jsxRuntime.jsx("input", {
                    type: "file",
                    accept: ".json",
                    className: "settings-input",
                    onChange: importGameState,
                    style: { display: "block", marginTop: "5px", marginBottom: "40px" }
                  })]
                }), jsxRuntime.jsx("button", { className: "settings-button", onClick: openMoreGames, children: "More Games" }), jsxRuntime.jsx("div", { style: { marginTop: "40px" }, children: " " }), jsxRuntime.jsx("button", { className: "settings-button", onClick: toggleSettings, children: "Back" })]
              }), jsxRuntime.jsxs("div", {
                className: "instruction",
                children: [jsxRuntime.jsx("img", { src: "./assets/left-arrow.svg", alt: "Instruction Icon", className: "instruction-icon" }), "Drag elements to craft"]
              })]
            }), jsxRuntime.jsxs("div", {
              className: "sidebar-controls",
              children: [jsxRuntime.jsxs("div", {
                className: "sidebar-sorting",
                children: [jsxRuntime.jsxs("div", {
                  className: `sidebar-discoveries sidebar-sorting-item ${settingsOpen ? "active" : ""}`,
                  onClick: toggleSettings,
                  children: [jsxRuntime.jsx("img", { src: "./assets/magic.svg", alt: "Settings Icon", className: "sidebar-sorting-icon" }), "Settings"]
                }), jsxRuntime.jsxs("div", {
                  className: "sidebar-sort sidebar-sorting-item",
                  onClick: cycleSortOrder,
                  children: [jsxRuntime.jsx("img", { src: `./assets/${sortField}.svg`, alt: `Sort by ${sortField.charAt(0).toUpperCase() + sortField.slice(1)} Icon`, className: "sidebar-sorting-icon" }), "Sort by ", sortField]
                })]
              }), jsxRuntime.jsxs("div", {
                className: "sidebar-search",
                children: [jsxRuntime.jsx("input", {
                  type: "text",
                  placeholder: "Search items...",
                  className: "sidebar-input",
                  value: searchTerm,
                  onChange: H => setSearchTerm(H.target.value)
                }), jsxRuntime.jsx("img", {
                  src: "./assets/close.svg",
                  alt: "Close Icon",
                  className: "sidebar-input-close",
                  style: { display: searchTerm ? "block" : "none" },
                  onClick: clearSearch
                })]
              })]
            })]
          }), jsxRuntime.jsxs("div", {
            className: "main",
            style: { padding: "0px" },
            children: [jsxRuntime.jsx(CanvasWorkspace, {
              elementsData: gameData,
              onNewCombination: registerNewElement,
              setClearDropZoneRef: H => {
                clearDropZoneRef.current = H
              },
              addItemToDropZone: addItemToDropZoneRef
            }), jsxRuntime.jsx("div", { className: "FreezeNova", onClick: openMoreGames, children: "FreezeNova.Games" }), jsxRuntime.jsxs("div", { className: "FoundElementsDiv", children: ["Elements: ", getElementCount()] }), jsxRuntime.jsx("div", { className: "reset", onClick: resetGame, children: "Reset" }), jsxRuntime.jsxs("div", {
              className: "side-controls",
              children: [jsxRuntime.jsx("img", {
                src: "./assets/trash.svg",
                alt: "Trash",
                className: "trash",
                onClick: toggleDeleteMode
              }), jsxRuntime.jsx("img", {
                src: "./assets/clear.svg",
                alt: "Clear",
                className: "clear",
                onClick: clearDropZone
              })]
            }), jsxRuntime.jsx("div", {              
className: "top-right-box", children: jsxRuntime.jsx(CreativityBox, {
                ref: creativityBoxRef,
                elementsData: gameData,
                onNewCombination: registerNewElement,
                addItemToDropZone: addItemToDropZoneRef,
                setDroppedItemInParent: updateBoxedItem
              })            
})]
          })]
        })]
      })
    })
  };
ReactDOM.createRoot(document.getElementById("root")).render(jsxRuntime.jsx(ReactDefault.StrictMode, { children: jsxRuntime.jsx(CraftingGame, {}) }));
