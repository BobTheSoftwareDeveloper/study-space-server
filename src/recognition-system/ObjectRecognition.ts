export abstract class ObjectRecognition {
  filePath: string

  confidenceThreshold = 0.8 // 80% threshold is used as discussed in my report

  constructor(filePath: string) {
    this.filePath = filePath
  }

  abstract detect(): Promise<number>
}
