import { configureStore } from '@reduxjs/toolkit';
import listOfBodyPartSlice from '../feature/listOfBodyPartSlice';
import exerciseSearchSlice from '../feature/exerciseSearchSlice';
import exerciseSingleDetailSlice from '../feature/exerciseSingleDetailSlice';
import exercisesTargetMuscleSlice from '../feature/exercisesTargetMuscleSlice';
import exercisesEquipmentSlice from '../feature/exercisesEquipmentSlice';

const store = configureStore({
  reducer: {
    listOfBodyPart: listOfBodyPartSlice,
    exerciseSearch: exerciseSearchSlice,
    exerciseSingleDetail: exerciseSingleDetailSlice,
    exercisesTargetMuscle: exercisesTargetMuscleSlice,
    exercisesEquipment: exercisesEquipmentSlice,
  },
});

export default store;
