export function isObject(aObject: any) {
  return (
    typeof aObject === "object" && !Array.isArray(aObject) && aObject !== null
  );
}
