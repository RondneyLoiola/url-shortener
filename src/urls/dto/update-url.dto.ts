import { PartialType } from "@nestjs/mapped-types";
import { CreateUrlDto } from "./create-url.dto";


export class UpdateAnswerDto extends PartialType(CreateUrlDto) {}
