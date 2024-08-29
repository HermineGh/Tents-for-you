export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          breakfast: boolean | null
          checkInDate: string | null
          checkOutDate: string | null
          created_at: string
          extrasPrice: number | null
          guestID: number | null
          id: number
          isPaid: boolean | null
          numbGuests: number | null
          numbNight: number | null
          observation: string | null
          status: string | null
          tentID: number | null
          tentPrice: number | null
          totalprice: number | null
        }
        Insert: {
          breakfast?: boolean | null
          checkInDate?: string | null
          checkOutDate?: string | null
          created_at?: string
          extrasPrice?: number | null
          guestID?: number | null
          id?: number
          isPaid?: boolean | null
          numbGuests?: number | null
          numbNight?: number | null
          observation?: string | null
          status?: string | null
          tentID?: number | null
          tentPrice?: number | null
          totalprice?: number | null
        }
        Update: {
          breakfast?: boolean | null
          checkInDate?: string | null
          checkOutDate?: string | null
          created_at?: string
          extrasPrice?: number | null
          guestID?: number | null
          id?: number
          isPaid?: boolean | null
          numbGuests?: number | null
          numbNight?: number | null
          observation?: string | null
          status?: string | null
          tentID?: number | null
          tentPrice?: number | null
          totalprice?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_guestID_fkey"
            columns: ["guestID"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_tentID_fkey"
            columns: ["tentID"]
            isOneToOne: false
            referencedRelation: "tents"
            referencedColumns: ["id"]
          },
        ]
      }
      guests: {
        Row: {
          countryFlag: string | null
          created_at: string
          email: string | null
          fullName: string | null
          id: number
          nationalID: string | null
          nationality: string | null
        }
        Insert: {
          countryFlag?: string | null
          created_at?: string
          email?: string | null
          fullName?: string | null
          id?: number
          nationalID?: string | null
          nationality?: string | null
        }
        Update: {
          countryFlag?: string | null
          created_at?: string
          email?: string | null
          fullName?: string | null
          id?: number
          nationalID?: string | null
          nationality?: string | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          breakfastPrice: number | null
          created_at: string
          id: number
          maxDays: number | null
          maxGuestsPerBooking: number | null
          minDays: number | null
        }
        Insert: {
          breakfastPrice?: number | null
          created_at?: string
          id?: number
          maxDays?: number | null
          maxGuestsPerBooking?: number | null
          minDays?: number | null
        }
        Update: {
          breakfastPrice?: number | null
          created_at?: string
          id?: number
          maxDays?: number | null
          maxGuestsPerBooking?: number | null
          minDays?: number | null
        }
        Relationships: []
      }
      tents: {
        Row: {
          created_at: string
          description: string | null
          discount: number | null
          guestsNumber: number | null
          id: number
          image: string | null
          name: string | null
          price: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          discount?: number | null
          guestsNumber?: number | null
          id?: number
          image?: string | null
          name?: string | null
          price?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          discount?: number | null
          guestsNumber?: number | null
          id?: number
          image?: string | null
          name?: string | null
          price?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
