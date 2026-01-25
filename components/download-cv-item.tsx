import { Item, ItemContent, ItemTitle, ItemActions } from "@/components/ui/item";
import { Download } from "lucide-react";
import { useRouter } from "next/navigation";

const DownloadCVItem = ({ title }: { title: string }) => {
    const router = useRouter();
    return                     <Item variant='outline' className="h-fit min-h-20">
                        <ItemContent>
                            <ItemTitle>
                                {title}
                            </ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <button onClick={() => router.push('/contact?type=mail')}>
                                <Download />                        
                            </button>
                        </ItemActions>
                    </Item> 
}

export default DownloadCVItem;