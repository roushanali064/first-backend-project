import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  ).sort({
      createdAt: -1,
    }).lean();

  //203001   0001
  // console.log(lastStudent?.id ? lastStudent.id.substring(6) : undefined)
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  
  let currentId = (0).toString();

  const lastStudentId = await findLastStudentId()
  
  const lastStudentCode = lastStudentId?.substring(4,6);
  const lastStudentYear = lastStudentId?.substring(0,4)
  const currentCode = payload.code;
  const currentYear = payload?.year;
  
  if(lastStudentId && lastStudentCode === currentCode && lastStudentYear === currentYear){
    currentId = lastStudentId.substring(6)
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};