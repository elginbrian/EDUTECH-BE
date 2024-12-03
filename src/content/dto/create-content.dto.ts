export class CreateContentDto {
  title: string;
  description: string;
  type: 'video' | 'text' | 'audio';
  url: string;
  tagId: number;
}
