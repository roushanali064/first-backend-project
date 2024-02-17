import { Types } from 'mongoose';

export type tGrade = 'A' | 'B' | 'C' | 'D' | 'F' | 'NA';
export type TCourseMarks = {
  classTaste1: number;
  midTerm: number;
  classTest2: number;
  finalTerm: number;
};

export type TEnrolledCourse = {
  semesterRegistration: Types.ObjectId;
  academicSemester: Types.ObjectId;
  academicFaculty: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  offeredCourse: Types.ObjectId;
  course: Types.ObjectId;
  student: Types.ObjectId;
  faculty: Types.ObjectId;
  isEnrolled: boolean;
  courseMarks: TCourseMarks;
  grade: tGrade;
  gradePoint: number;
  isCompleted: boolean;
};
