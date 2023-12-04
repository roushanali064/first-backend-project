import catchAsync from "../../utilitys/catchAsync";
import sendResponse from "../../utilitys/sendResponse";
import { academicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req,res)=>{

    const result = await academicSemesterServices.createAcademicSemesterInToDB(req.body)

    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'academic semester create successfully',
        data: result
    })
});

// get all academics semester
const getAllAcademicSemester = catchAsync(async (req, res)=>{
    const result = await academicSemesterServices.getAllAcademicSemesterInToDB()

    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'academic semester retrieve successfully',
        data: result
    })
})

// get all academics semester
const singleAcademicSemester = catchAsync(async (req, res)=>{

    const {semesterId } = req.params

    const result = await academicSemesterServices.singleAcademicSemesterInToDB(semesterId)

    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'academic semester retrieve successfully',
        data: result
    })
})

// get all academics semester
const updateAcademicSemester = catchAsync(async (req, res)=>{

    const {semesterId } = req.params

    const result = await academicSemesterServices.updateAcademicSemesterInToDB(semesterId,req.body)

    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'academic semester retrieve successfully',
        data: result
    })
})

export const academicSemesterController = {
    createAcademicSemester,
    getAllAcademicSemester,
    singleAcademicSemester,
    updateAcademicSemester
}