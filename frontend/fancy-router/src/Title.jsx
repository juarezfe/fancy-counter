export default function Title({ isLocked, limit }) {
  return (
    <h1 className="title">
      {isLocked ? (
        <span>
          Limit! Buy <b>Pro</b> for &gt; {limit}
        </span>
      ) : (
        <span>Fancy Counter</span>
      )}
    </h1>
  );
}
