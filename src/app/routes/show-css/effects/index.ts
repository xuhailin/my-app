import { bgAndBorderComponents } from './bg-and-border.component';
import { visualComponents } from './visual.component';
import { shapeComponents } from './shape.component';
import clipPathComponents from './clip-path.component';

export const effectComponents = [
  ...bgAndBorderComponents,
  ...visualComponents,
  ...shapeComponents,
  ...clipPathComponents
];