import React, { useReducer, useCallback } from "react";
import { Paper, Box, Button } from "@mui/material";
import TableItem from "./TableItem";

const tableReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH": {
      let newArray;
      if (action.selected) {
        newArray = state.array.map((e) => {
          if (
            state.flippedCategory[e.priority] === action.priority &&
            e.checked
          ) {
            const newCategory =
              action.direction === "higher"
                ? state.categoryEnum[parseInt(action.priority) + 1]
                : state.categoryEnum[parseInt(action.priority) - 1];
            return { ...e, priority: newCategory, checked: false };
          } else {
            return e;
          }
        });
      } else {
        newArray = state.array.map((e) => {
          if (e.id === action.id) {
            const newCategory =
              action.direction === "higher"
                ? state.categoryEnum[parseInt(action.priority) + 1]
                : state.categoryEnum[parseInt(action.priority) - 1];
            return { ...e, priority: newCategory };
          } else {
            return e;
          }
        });
      }
      return { ...state, array: newArray };
    }
    case "CHECK": {
      const newArray = state.array.map((e) => {
        if (e.id === action.id) {
          return { ...e, checked: !e.checked };
        } else {
          return e;
        }
      });
      return { ...state, array: newArray };
    }
    default:
      return state;
  }
};
const Table = (props) => {
  const categoryEnum = { ...props.category };
  const flippedCategory = Object.fromEntries(
    Object.entries(categoryEnum).map(([key, value]) => [value, key])
  );

  const [tableState, dispatch] = useReducer(tableReducer, {
    array: props.array,
    categoryEnum,
    flippedCategory,
  });

  const switchHandler = useCallback((element, category, direction) => {
    dispatch({
      type: "SWITCH",
      priority: flippedCategory[category],
      id: element.id,
      direction,
      selected: false,
    });
  }, []);

  const handleCheck = useCallback((element) => {
    dispatch({
      type: "CHECK",
      priority: element.priority,
      id: element.id,
    });
  }, []);
  const moveChecked = useCallback((category, direction) => {
    dispatch({
      type: "SWITCH",
      priority: flippedCategory[category],
      direction,
      selected: true,
    });
  }, []);

  return (
    <Paper
      elevation={10}
      sx={{
        display: "flex",
        width: 1,
        gap: 1,
        p: 2,
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        {props.category.map((e, i) => (
          <Box key={e}>
            <Box
              sx={{
                display: "flex",
                justifyContent: i === 0 ? "flex-end" : "space-between",
              }}
            >
              {!(i === 0) && (
                <Button
                  variant="contained"
                  onClick={() => moveChecked(e, "lower")}
                >
                  Lower
                </Button>
              )}
              {!(i + 1 === props.category.length) && (
                <Button
                  variant="contained"
                  onClick={() => moveChecked(e, "higher")}
                >
                  Higher
                </Button>
              )}
            </Box>
            <Box>
              {tableState.array
                .filter((k) => k.priority === e)
                .map((k) => {
                  return (
                    <TableItem
                      key={k.id}
                      firstCategory={k.priority === props.category[0]}
                      lastCategory={k.priority === props.category.at(-1)}
                      title={k.title}
                      priority={k.priority}
                      switchLowerHandler={() => switchHandler(k, e, "lower")}
                      switchHigherHandler={() => switchHandler(k, e, "higher")}
                      handleCheck={() => handleCheck(k)}
                    />
                  );
                })}
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
export default Table;
