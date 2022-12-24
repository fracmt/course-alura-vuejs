import IProject from "./IProject"

export default interface ITask {
	project: IProject,
	elapsedTime: number,
	description: string
}