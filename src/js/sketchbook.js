import './lib/shaders/EffectComposer';
import './lib/shaders/RenderPass';
import './lib/shaders/MaskPass';
import './lib/shaders/ShaderPass';
import './lib/shaders/FXAAShader';
import './lib/shaders/CopyShader';
import './lib/shaders/Sky';

import './lib/utils/Detector';
import './lib/utils/Stats';
import './lib/utils/dat.gui';
import './lib/utils/inflate.min';
import './lib/utils/FBXLoader';
import './lib/utils/SceneUtils';

// require('./lib/shaders/EffectComposer');
// require('./lib/shaders/RenderPass');
// require('./lib/shaders/MaskPass');
// require('./lib/shaders/ShaderPass');
// require('./lib/shaders/FXAAShader');
// require('./lib/shaders/CopyShader');
// require('./lib/shaders/Sky');

// require('./lib/utils/Detector');
// require('./lib/utils/Stats');
// require('./lib/utils/dat.gui');
// require('./lib/utils/inflate.min');
// require('./lib/utils/FBXLoader');
// require('./lib/utils/SceneUtils');

export { CameraControls } from './sketchbook/CameraControls';
export { Character } from './characters/Character';
export { CharacterAI_Default } from './characters/CharacterAI';
export { CharacterAI_FollowCharacter } from './characters/CharacterAI';
export { CharacterAI_Random } from './characters/CharacterAI';
export { CharacterState_DefaultState } from './characters/CharacterStates';
export { CharacterState_DropIdle } from './characters/CharacterStates';
export { CharacterState_DropRunning } from './characters/CharacterStates';
export { CharacterState_EndWalk } from './characters/CharacterStates';
export { CharacterState_Falling } from './characters/CharacterStates';
export { CharacterState_Idle } from './characters/CharacterStates';
export { CharacterState_JumpIdle } from './characters/CharacterStates';
export { CharacterState_JumpRunning } from './characters/CharacterStates';
export { CharacterState_Sprint } from './characters/CharacterStates';
export { CharacterState_StartWalkForward } from './characters/CharacterStates';
export { CharacterState_Walk } from './characters/CharacterStates';
export { Control_EventControl } from './sketchbook/Controls';
export { Control_LerpControl } from './sketchbook/Controls';
export { GameMode_CharacterControls } from './sketchbook/GameModes';
export { GameMode_FreeCameraControls } from './sketchbook/GameModes';
export { Utilities } from './sketchbook/Utilities';
export { World } from './sketchbook/World';