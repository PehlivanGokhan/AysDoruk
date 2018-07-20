export class Base {
    public $key: string;
    public CreateDate: Date = new Date();
    public UpdateDate: Date = null;
    public DeleteDate: Date = null;
    public IsDeleted = false;
}
