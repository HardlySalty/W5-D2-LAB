import { Schema } from "mongoose";


export const JobSchema = new Schema(
{
  companyName: { type: String, required:true , minLength: 3, maxLength: 25},
  title: { type: String, required: true, minLength: 3, maxLength: 25},
  description: { type: String, minLength: 3, maxLength: 300, default: "No Job Description"},
  pay: { type: String, required: true, min: 1, max:999999999}
},
{ timestamps: true, toJSON: { virtuals: true } }
) 