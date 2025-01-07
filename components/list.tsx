import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "./ui/button"

export const List = () => {
    return <Dialog>
        <DialogTrigger>
            <Button>
                Voire Étudiants gagnants
            </Button>
        </DialogTrigger>
        <DialogContent>
            <div className="aspect-video">
                <Image src="/PHOTO-2024-06-28-08-55-29.jpg" fill alt="Étudiants gagnants" className="object-contain rounded-md" />
            </div>
        </DialogContent>
    </Dialog>
}