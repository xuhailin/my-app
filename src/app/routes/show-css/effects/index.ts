import { bgAndBorderComponents } from './bg-and-border.component';
import { visualComponents } from './visual.component';
import { clipPathComponents } from './clip-path.component';
import { textComponents } from './text.component';
import {canvasComponents} from './canvas.component';

export const effectComponents = [
  ...bgAndBorderComponents,
  ...visualComponents,
  ...clipPathComponents,
  ...textComponents,
  ...canvasComponents
];