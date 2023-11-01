import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface AvaratProps {
  src?: string | null | undefined;
}

export default function Avatar({ src }: AvaratProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avatar"
        className="rounded-full"
        height={30}
        width={30}
      />
    );
  }
  return <FaUserCircle size={24} />;
}
