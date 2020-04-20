
class FriendType {
    static PENDING: string = 'PENDING';
    static FRIEND: string = 'FRIEND';

    static getStr(en: string): string {
        switch (en) {
            case FriendType.PENDING:
                return 'Pending';
                break;
            case FriendType.FRIEND:
                return 'Friend';
                break;
            default:
                return '';
                break;
        }
    }
}
const FriendEnum = [FriendType.FRIEND, FriendType.PENDING];
export { FriendType, FriendEnum };
