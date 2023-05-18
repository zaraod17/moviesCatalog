import Link from "next/link";

import { Paper, IconButton, Tooltip } from "@mui/material";
import { PlayArrow, Add, Info } from "@mui/icons-material";

import {
  StyledMoviesGridItem,
  StyledGridItemActions,
} from "./MoviesGridItem.styled";
import { MoviesGridItemsProps } from "./MoviesGridItem.types";

const MoviesGridItem: React.FC<MoviesGridItemsProps> = ({
  imgUrl,
  title,
  id,
}) => {
  return (
    <StyledMoviesGridItem item xs={12} md={4}>
      <Paper elevation={1}>
        <Link href={`/movie-details/${id}`}>
          <img src={imgUrl} alt={title} />
          <StyledGridItemActions>
            <Tooltip title="Play">
              <IconButton>
                <PlayArrow />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add">
              <IconButton>
                <Add />
              </IconButton>
            </Tooltip>
            <Tooltip title="Info">
              <IconButton>
                <Info />
              </IconButton>
            </Tooltip>
          </StyledGridItemActions>
        </Link>
      </Paper>
    </StyledMoviesGridItem>
  );
};

export default MoviesGridItem;
