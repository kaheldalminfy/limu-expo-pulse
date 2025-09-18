export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      archive_shelves: {
        Row: {
          code: string
          created_at: string
          id: string
          label: string | null
          user_id: string
          warehouse_id: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          label?: string | null
          user_id: string
          warehouse_id: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          label?: string | null
          user_id?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "archive_shelves_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "archive_warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      archive_warehouses: {
        Row: {
          code: string
          created_at: string
          description: string | null
          id: string
          name: string
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      asset_types: {
        Row: {
          code: string
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      assets: {
        Row: {
          cost_center: string | null
          created_at: string
          dept_id: string | null
          id: string
          location_id: string | null
          model_id: string | null
          purchase_order_id: string | null
          receiving_id: string | null
          serial_number: string
          status: Database["public"]["Enums"]["asset_status"]
          tag_code: string
          type_id: string
          updated_at: string
          vendor_id: string | null
          warranty_expiry: string | null
        }
        Insert: {
          cost_center?: string | null
          created_at?: string
          dept_id?: string | null
          id?: string
          location_id?: string | null
          model_id?: string | null
          purchase_order_id?: string | null
          receiving_id?: string | null
          serial_number: string
          status?: Database["public"]["Enums"]["asset_status"]
          tag_code: string
          type_id: string
          updated_at?: string
          vendor_id?: string | null
          warranty_expiry?: string | null
        }
        Update: {
          cost_center?: string | null
          created_at?: string
          dept_id?: string | null
          id?: string
          location_id?: string | null
          model_id?: string | null
          purchase_order_id?: string | null
          receiving_id?: string | null
          serial_number?: string
          status?: Database["public"]["Enums"]["asset_status"]
          tag_code?: string
          type_id?: string
          updated_at?: string
          vendor_id?: string | null
          warranty_expiry?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assets_dept_id_fkey"
            columns: ["dept_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "models"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_receiving_id_fkey"
            columns: ["receiving_id"]
            isOneToOne: false
            referencedRelation: "receivings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "asset_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      assignments: {
        Row: {
          asset_id: string
          assigned_at: string
          assigned_by_user_id: string | null
          id: string
          note: string | null
          return_due_at: string | null
          signed_doc_path: string | null
          user_id: string | null
        }
        Insert: {
          asset_id: string
          assigned_at?: string
          assigned_by_user_id?: string | null
          id?: string
          note?: string | null
          return_due_at?: string | null
          signed_doc_path?: string | null
          user_id?: string | null
        }
        Update: {
          asset_id?: string
          assigned_at?: string
          assigned_by_user_id?: string | null
          id?: string
          note?: string | null
          return_due_at?: string | null
          signed_doc_path?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assignments_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      attachments: {
        Row: {
          created_at: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["attachment_entity_type"]
          file_path: string
          id: string
          mime: string
        }
        Insert: {
          created_at?: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["attachment_entity_type"]
          file_path: string
          id?: string
          mime: string
        }
        Update: {
          created_at?: string
          entity_id?: string
          entity_type?: Database["public"]["Enums"]["attachment_entity_type"]
          file_path?: string
          id?: string
          mime?: string
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          actor_user_id: string | null
          created_at: string
          diff_json: Json | null
          entity_id: string | null
          entity_type: string
          id: string
          ip: string | null
          user_agent: string | null
        }
        Insert: {
          action: string
          actor_user_id?: string | null
          created_at?: string
          diff_json?: Json | null
          entity_id?: string | null
          entity_type: string
          id?: string
          ip?: string | null
          user_agent?: string | null
        }
        Update: {
          action?: string
          actor_user_id?: string | null
          created_at?: string
          diff_json?: Json | null
          entity_id?: string | null
          entity_type?: string
          id?: string
          ip?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          metadata: Json | null
          role: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role?: string
          user_id?: string | null
        }
        Relationships: []
      }
      committee_reviews: {
        Row: {
          created_at: string
          final_decision: string | null
          id: string
          interview_id: string
          review_notes: string | null
          review_score: number | null
          reviewed_at: string
          reviewer_email: string
          reviewer_name: string
        }
        Insert: {
          created_at?: string
          final_decision?: string | null
          id?: string
          interview_id: string
          review_notes?: string | null
          review_score?: number | null
          reviewed_at?: string
          reviewer_email: string
          reviewer_name: string
        }
        Update: {
          created_at?: string
          final_decision?: string | null
          id?: string
          interview_id?: string
          review_notes?: string | null
          review_score?: number | null
          reviewed_at?: string
          reviewer_email?: string
          reviewer_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "committee_reviews_interview_id_fkey"
            columns: ["interview_id"]
            isOneToOne: false
            referencedRelation: "interviews"
            referencedColumns: ["id"]
          },
        ]
      }
      departments: {
        Row: {
          code: string
          created_at: string
          id: string
          name: string
          parent_id: string | null
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          name: string
          parent_id?: string | null
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          name?: string
          parent_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "departments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      disposals: {
        Row: {
          approved_at: string | null
          approved_by_user_id: string | null
          asset_id: string
          created_at: string
          disposed_at: string | null
          id: string
          reason: string
          requested_by_user_id: string | null
          signed_doc_path: string | null
          status: Database["public"]["Enums"]["disposal_status"]
          updated_at: string
        }
        Insert: {
          approved_at?: string | null
          approved_by_user_id?: string | null
          asset_id: string
          created_at?: string
          disposed_at?: string | null
          id?: string
          reason: string
          requested_by_user_id?: string | null
          signed_doc_path?: string | null
          status?: Database["public"]["Enums"]["disposal_status"]
          updated_at?: string
        }
        Update: {
          approved_at?: string | null
          approved_by_user_id?: string | null
          asset_id?: string
          created_at?: string
          disposed_at?: string | null
          id?: string
          reason?: string
          requested_by_user_id?: string | null
          signed_doc_path?: string | null
          status?: Database["public"]["Enums"]["disposal_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "disposals_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      document_analysis: {
        Row: {
          analysis_metadata: Json | null
          confidence_score: number | null
          created_at: string
          document_structure: Json | null
          extracted_text: string | null
          file_id: string
          id: string
          images_charts: Json | null
          key_dates: string[] | null
          key_numbers: string[] | null
          signatures_stamps: Json | null
          tables_data: Json | null
          updated_at: string
        }
        Insert: {
          analysis_metadata?: Json | null
          confidence_score?: number | null
          created_at?: string
          document_structure?: Json | null
          extracted_text?: string | null
          file_id: string
          id?: string
          images_charts?: Json | null
          key_dates?: string[] | null
          key_numbers?: string[] | null
          signatures_stamps?: Json | null
          tables_data?: Json | null
          updated_at?: string
        }
        Update: {
          analysis_metadata?: Json | null
          confidence_score?: number | null
          created_at?: string
          document_structure?: Json | null
          extracted_text?: string | null
          file_id?: string
          id?: string
          images_charts?: Json | null
          key_dates?: string[] | null
          key_numbers?: string[] | null
          signatures_stamps?: Json | null
          tables_data?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_analysis_file_id_fkey"
            columns: ["file_id"]
            isOneToOne: false
            referencedRelation: "files"
            referencedColumns: ["id"]
          },
        ]
      }
      document_chunks: {
        Row: {
          chunk_index: number
          content: string
          created_at: string
          document_id: string
          embedding: string | null
          id: string
          updated_at: string
        }
        Insert: {
          chunk_index: number
          content: string
          created_at?: string
          document_id: string
          embedding?: string | null
          id?: string
          updated_at?: string
        }
        Update: {
          chunk_index?: number
          content?: string
          created_at?: string
          document_id?: string
          embedding?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_chunks_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      document_verifications: {
        Row: {
          created_at: string
          extracted_data: Json | null
          id: string
          is_verified: boolean | null
          updated_at: string
          user_email: string
          user_name: string
          user_phone: string
          verified_data: Json | null
        }
        Insert: {
          created_at?: string
          extracted_data?: Json | null
          id?: string
          is_verified?: boolean | null
          updated_at?: string
          user_email: string
          user_name: string
          user_phone: string
          verified_data?: Json | null
        }
        Update: {
          created_at?: string
          extracted_data?: Json | null
          id?: string
          is_verified?: boolean | null
          updated_at?: string
          user_email?: string
          user_name?: string
          user_phone?: string
          verified_data?: Json | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          classification: Json | null
          content_type: string
          created_at: string
          extracted_text: string | null
          file_path: string
          file_size: number
          filename: string
          id: string
          metadata: Json | null
          ocr_confidence: number | null
          organization_id: string | null
          original_filename: string
          processing_status: string | null
          status: string
          tenant_id: string | null
          updated_at: string
          uploaded_by: string | null
        }
        Insert: {
          classification?: Json | null
          content_type: string
          created_at?: string
          extracted_text?: string | null
          file_path: string
          file_size: number
          filename: string
          id?: string
          metadata?: Json | null
          ocr_confidence?: number | null
          organization_id?: string | null
          original_filename: string
          processing_status?: string | null
          status?: string
          tenant_id?: string | null
          updated_at?: string
          uploaded_by?: string | null
        }
        Update: {
          classification?: Json | null
          content_type?: string
          created_at?: string
          extracted_text?: string | null
          file_path?: string
          file_size?: number
          filename?: string
          id?: string
          metadata?: Json | null
          ocr_confidence?: number | null
          organization_id?: string | null
          original_filename?: string
          processing_status?: string | null
          status?: string
          tenant_id?: string | null
          updated_at?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      faculties: {
        Row: {
          created_at: string | null
          faculty_name: string
          id: string
        }
        Insert: {
          created_at?: string | null
          faculty_name: string
          id?: string
        }
        Update: {
          created_at?: string | null
          faculty_name?: string
          id?: string
        }
        Relationships: []
      }
      file_embeddings: {
        Row: {
          chunk_index: number
          chunk_text: string
          chunk_type: string | null
          created_at: string
          embedding_vector: string | null
          file_id: string
          id: string
          metadata: Json | null
        }
        Insert: {
          chunk_index: number
          chunk_text: string
          chunk_type?: string | null
          created_at?: string
          embedding_vector?: string | null
          file_id: string
          id?: string
          metadata?: Json | null
        }
        Update: {
          chunk_index?: number
          chunk_text?: string
          chunk_type?: string | null
          created_at?: string
          embedding_vector?: string | null
          file_id?: string
          id?: string
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "file_embeddings_file_id_fkey"
            columns: ["file_id"]
            isOneToOne: false
            referencedRelation: "files"
            referencedColumns: ["id"]
          },
        ]
      }
      files: {
        Row: {
          ai_tags: string[] | null
          category: string | null
          created_at: string
          description: string | null
          file_size: number
          filename: string
          id: string
          mimetype: string
          original_filename: string
          processing_status: string | null
          shelf_id: string | null
          storage_path: string
          summary: string | null
          title: string | null
          updated_at: string
          upload_time: string
          uploader_id: string | null
        }
        Insert: {
          ai_tags?: string[] | null
          category?: string | null
          created_at?: string
          description?: string | null
          file_size: number
          filename: string
          id?: string
          mimetype: string
          original_filename: string
          processing_status?: string | null
          shelf_id?: string | null
          storage_path: string
          summary?: string | null
          title?: string | null
          updated_at?: string
          upload_time?: string
          uploader_id?: string | null
        }
        Update: {
          ai_tags?: string[] | null
          category?: string | null
          created_at?: string
          description?: string | null
          file_size?: number
          filename?: string
          id?: string
          mimetype?: string
          original_filename?: string
          processing_status?: string | null
          shelf_id?: string | null
          storage_path?: string
          summary?: string | null
          title?: string | null
          updated_at?: string
          upload_time?: string
          uploader_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "files_shelf_id_fkey"
            columns: ["shelf_id"]
            isOneToOne: false
            referencedRelation: "archive_shelves"
            referencedColumns: ["id"]
          },
        ]
      }
      game_sessions: {
        Row: {
          created_at: string
          created_by: string | null
          current_game_type: string | null
          id: string
          max_participants: number | null
          session_code: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          current_game_type?: string | null
          id?: string
          max_participants?: number | null
          session_code: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          current_game_type?: string | null
          id?: string
          max_participants?: number | null
          session_code?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      interview_analysis: {
        Row: {
          admission_recommendation: string | null
          analysis_summary: string | null
          audio_analysis: Json | null
          committee_notes: string | null
          confidence_score: number | null
          created_at: string
          id: string
          interview_id: string
          overall_score: number | null
          questions_answered_count: number | null
          questions_answered_properly: boolean | null
          updated_at: string
          video_analysis: Json | null
        }
        Insert: {
          admission_recommendation?: string | null
          analysis_summary?: string | null
          audio_analysis?: Json | null
          committee_notes?: string | null
          confidence_score?: number | null
          created_at?: string
          id?: string
          interview_id: string
          overall_score?: number | null
          questions_answered_count?: number | null
          questions_answered_properly?: boolean | null
          updated_at?: string
          video_analysis?: Json | null
        }
        Update: {
          admission_recommendation?: string | null
          analysis_summary?: string | null
          audio_analysis?: Json | null
          committee_notes?: string | null
          confidence_score?: number | null
          created_at?: string
          id?: string
          interview_id?: string
          overall_score?: number | null
          questions_answered_count?: number | null
          questions_answered_properly?: boolean | null
          updated_at?: string
          video_analysis?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_analysis_interview_id_fkey"
            columns: ["interview_id"]
            isOneToOne: false
            referencedRelation: "interviews"
            referencedColumns: ["id"]
          },
        ]
      }
      interviews: {
        Row: {
          answered_questions: number | null
          answers: Json | null
          completed_at: string | null
          created_at: string
          id: string
          questions: Json
          status: string
          student_email: string
          student_id: string
          student_name: string
          total_questions: number | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          answered_questions?: number | null
          answers?: Json | null
          completed_at?: string | null
          created_at?: string
          id?: string
          questions?: Json
          status?: string
          student_email: string
          student_id: string
          student_name: string
          total_questions?: number | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          answered_questions?: number | null
          answers?: Json | null
          completed_at?: string | null
          created_at?: string
          id?: string
          questions?: Json
          status?: string
          student_email?: string
          student_id?: string
          student_name?: string
          total_questions?: number | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      inventory_scans: {
        Row: {
          asset_id: string
          client_id: string | null
          created_at: string
          dept_id: string | null
          id: string
          location_id: string | null
          note: string | null
          scanned_at: string
          scanned_by_user_id: string | null
          session_id: string
          source: Database["public"]["Enums"]["scan_source"]
          updated_at: string
        }
        Insert: {
          asset_id: string
          client_id?: string | null
          created_at?: string
          dept_id?: string | null
          id?: string
          location_id?: string | null
          note?: string | null
          scanned_at: string
          scanned_by_user_id?: string | null
          session_id: string
          source?: Database["public"]["Enums"]["scan_source"]
          updated_at?: string
        }
        Update: {
          asset_id?: string
          client_id?: string | null
          created_at?: string
          dept_id?: string | null
          id?: string
          location_id?: string | null
          note?: string | null
          scanned_at?: string
          scanned_by_user_id?: string | null
          session_id?: string
          source?: Database["public"]["Enums"]["scan_source"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_scans_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_scans_dept_id_fkey"
            columns: ["dept_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_scans_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_scans_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "inventory_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_sessions: {
        Row: {
          created_at: string
          end_at: string | null
          id: string
          name: string
          scheduled_by_user_id: string | null
          start_at: string
          status: Database["public"]["Enums"]["inventory_status"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          end_at?: string | null
          id?: string
          name: string
          scheduled_by_user_id?: string | null
          start_at: string
          status?: Database["public"]["Enums"]["inventory_status"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          end_at?: string | null
          id?: string
          name?: string
          scheduled_by_user_id?: string | null
          start_at?: string
          status?: Database["public"]["Enums"]["inventory_status"]
          updated_at?: string
        }
        Relationships: []
      }
      locations: {
        Row: {
          code: string
          created_at: string
          id: string
          name: string
          parent_id: string | null
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          name: string
          parent_id?: string | null
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          name?: string
          parent_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "locations_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
        ]
      }
      models: {
        Row: {
          created_at: string
          id: string
          name: string
          specs_json: Json | null
          updated_at: string
          vendor_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          specs_json?: Json | null
          updated_at?: string
          vendor_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          specs_json?: Json | null
          updated_at?: string
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "models_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_members: {
        Row: {
          id: string
          invited_by: string | null
          joined_at: string
          organization_id: string
          role: Database["public"]["Enums"]["org_role"]
          user_id: string
        }
        Insert: {
          id?: string
          invited_by?: string | null
          joined_at?: string
          organization_id: string
          role?: Database["public"]["Enums"]["org_role"]
          user_id: string
        }
        Update: {
          id?: string
          invited_by?: string | null
          joined_at?: string
          organization_id?: string
          role?: Database["public"]["Enums"]["org_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          id: string
          name: string
          settings: Json | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          settings?: Json | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          settings?: Json | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      permissions: {
        Row: {
          action: string
          created_at: string
          description: string | null
          id: string
          name: string
          resource: string
        }
        Insert: {
          action: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          resource: string
        }
        Update: {
          action?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          resource?: string
        }
        Relationships: []
      }
      processing_jobs: {
        Row: {
          created_at: string
          error_message: string | null
          file_id: string
          id: string
          job_type: string
          progress: number | null
          result: Json | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          file_id: string
          id?: string
          job_type: string
          progress?: number | null
          result?: Json | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          file_id?: string
          id?: string
          job_type?: string
          progress?: number | null
          result?: Json | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "processing_jobs_file_id_fkey"
            columns: ["file_id"]
            isOneToOne: false
            referencedRelation: "files"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          faculty_id: string | null
          full_name: string | null
          id: string
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          faculty_id?: string | null
          full_name?: string | null
          id: string
          role?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          faculty_id?: string | null
          full_name?: string | null
          id?: string
          role?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_faculty_id_fkey"
            columns: ["faculty_id"]
            isOneToOne: false
            referencedRelation: "faculties"
            referencedColumns: ["id"]
          },
        ]
      }
      programs: {
        Row: {
          created_at: string | null
          faculty_id: string | null
          id: string
          program_name: string
        }
        Insert: {
          created_at?: string | null
          faculty_id?: string | null
          id?: string
          program_name: string
        }
        Update: {
          created_at?: string | null
          faculty_id?: string | null
          id?: string
          program_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "programs_faculty_id_fkey"
            columns: ["faculty_id"]
            isOneToOne: false
            referencedRelation: "faculties"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_orders: {
        Row: {
          created_at: string
          id: string
          order_date: string
          po_number: string
          total_amount: number | null
          updated_at: string
          vendor_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          order_date: string
          po_number: string
          total_amount?: number | null
          updated_at?: string
          vendor_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          order_date?: string
          po_number?: string
          total_amount?: number | null
          updated_at?: string
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_orders_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      qr_codes: {
        Row: {
          created_at: string
          document_id: string
          expires_at: string | null
          id: string
          qr_string: string
        }
        Insert: {
          created_at?: string
          document_id: string
          expires_at?: string | null
          id?: string
          qr_string: string
        }
        Update: {
          created_at?: string
          document_id?: string
          expires_at?: string | null
          id?: string
          qr_string?: string
        }
        Relationships: []
      }
      receivings: {
        Row: {
          created_at: string
          id: string
          note: string | null
          purchase_order_id: string | null
          received_date: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          note?: string | null
          purchase_order_id?: string | null
          received_date: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          note?: string | null
          purchase_order_id?: string | null
          received_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "receivings_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          created_at: string
          id: string
          permission_id: string
          role_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          permission_id: string
          role_id: string
        }
        Update: {
          created_at?: string
          id?: string
          permission_id?: string
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      session_participants: {
        Row: {
          id: string
          joined_at: string
          last_active: string
          session_id: string
          student_name: string
        }
        Insert: {
          id?: string
          joined_at?: string
          last_active?: string
          session_id: string
          student_name: string
        }
        Update: {
          id?: string
          joined_at?: string
          last_active?: string
          session_id?: string
          student_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_participants_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "game_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      student_documents: {
        Row: {
          category: string | null
          created_at: string | null
          document_name: string
          extracted_text: string | null
          file_path: string
          id: string
          student_id: string | null
          upload_date: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          document_name: string
          extracted_text?: string | null
          file_path: string
          id?: string
          student_id?: string | null
          upload_date?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          document_name?: string
          extracted_text?: string | null
          file_path?: string
          id?: string
          student_id?: string | null
          upload_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_documents_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          created_at: string | null
          id: string
          program_id: string | null
          qr_code_identifier: string | null
          status: string | null
          student_name: string
          student_unique_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          program_id?: string | null
          qr_code_identifier?: string | null
          status?: string | null
          student_name: string
          student_unique_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          program_id?: string | null
          qr_code_identifier?: string | null
          status?: string | null
          student_name?: string
          student_unique_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "students_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      survey_responses: {
        Row: {
          attended_all: boolean
          comments: string | null
          created_at: string
          duration_rating: string
          equipment_rating: string
          id: string
          organization_rating: string
          schedule_rating: string
          submitted_at: string
          topics_rating: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          attended_all: boolean
          comments?: string | null
          created_at?: string
          duration_rating: string
          equipment_rating: string
          id?: string
          organization_rating: string
          schedule_rating: string
          submitted_at?: string
          topics_rating: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          attended_all?: boolean
          comments?: string | null
          created_at?: string
          duration_rating?: string
          equipment_rating?: string
          id?: string
          organization_rating?: string
          schedule_rating?: string
          submitted_at?: string
          topics_rating?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      tenants: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      text_responses: {
        Row: {
          id: string
          participant_id: string
          response_text: string
          session_id: string
          submitted_at: string
          target_word: string
        }
        Insert: {
          id?: string
          participant_id: string
          response_text: string
          session_id: string
          submitted_at?: string
          target_word: string
        }
        Update: {
          id?: string
          participant_id?: string
          response_text?: string
          session_id?: string
          submitted_at?: string
          target_word?: string
        }
        Relationships: [
          {
            foreignKeyName: "text_responses_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "session_participants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "text_responses_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "game_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      transfers: {
        Row: {
          approved_at: string | null
          approved_by_user_id: string | null
          asset_id: string
          created_at: string
          from_dept_id: string | null
          from_location_id: string | null
          id: string
          requested_by_user_id: string | null
          signed_doc_path: string | null
          status: Database["public"]["Enums"]["transfer_status"]
          to_dept_id: string | null
          to_location_id: string | null
          transferred_at: string | null
          updated_at: string
        }
        Insert: {
          approved_at?: string | null
          approved_by_user_id?: string | null
          asset_id: string
          created_at?: string
          from_dept_id?: string | null
          from_location_id?: string | null
          id?: string
          requested_by_user_id?: string | null
          signed_doc_path?: string | null
          status?: Database["public"]["Enums"]["transfer_status"]
          to_dept_id?: string | null
          to_location_id?: string | null
          transferred_at?: string | null
          updated_at?: string
        }
        Update: {
          approved_at?: string | null
          approved_by_user_id?: string | null
          asset_id?: string
          created_at?: string
          from_dept_id?: string | null
          from_location_id?: string | null
          id?: string
          requested_by_user_id?: string | null
          signed_doc_path?: string | null
          status?: Database["public"]["Enums"]["transfer_status"]
          to_dept_id?: string | null
          to_location_id?: string | null
          transferred_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "transfers_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfers_from_dept_id_fkey"
            columns: ["from_dept_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfers_from_location_id_fkey"
            columns: ["from_location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfers_to_dept_id_fkey"
            columns: ["to_dept_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfers_to_location_id_fkey"
            columns: ["to_location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          expires_at: string | null
          id: string
          is_active: boolean
          role_id: string
          user_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean
          role_id: string
          user_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean
          role_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          role: string
          tenant_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          role?: string
          tenant_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          role?: string
          tenant_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      vendors: {
        Row: {
          contact: string | null
          created_at: string
          email: string | null
          id: string
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          contact?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          contact?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      voting_responses: {
        Row: {
          id: string
          option_number: number
          participant_id: string
          session_id: string
          submitted_at: string
        }
        Insert: {
          id?: string
          option_number: number
          participant_id: string
          session_id: string
          submitted_at?: string
        }
        Update: {
          id?: string
          option_number?: number
          participant_id?: string
          session_id?: string
          submitted_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "voting_responses_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "session_participants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "voting_responses_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "game_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_org_role: {
        Args: { org_id: string; user_id: string }
        Returns: Database["public"]["Enums"]["org_role"]
      }
      get_user_permissions: {
        Args: { user_uuid: string }
        Returns: {
          action: string
          permission_name: string
          resource: string
        }[]
      }
      get_user_tenant_id: {
        Args: { user_uuid: string }
        Returns: string
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      has_permission: {
        Args: { permission_name: string; user_uuid: string }
        Returns: boolean
      }
      has_role: {
        Args: { role_name: string; user_uuid: string }
        Returns: boolean
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      search_similar_documents: {
        Args: {
          query_embedding: string
          result_limit?: number
          similarity_threshold?: number
          user_id: string
        }
        Returns: {
          content: string
          document_id: string
          filename: string
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      user_is_org_member: {
        Args: { org_id: string; user_id: string }
        Returns: boolean
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      asset_status:
        | "IN_STOCK"
        | "ASSIGNED"
        | "IN_TRANSFER"
        | "IN_REPAIR"
        | "RETIRED"
      attachment_entity_type:
        | "ASSET"
        | "ASSIGNMENT"
        | "TRANSFER"
        | "DISPOSAL"
        | "TICKET"
      disposal_status: "PENDING" | "APPROVED" | "REJECTED" | "COMPLETED"
      inventory_status: "OPEN" | "CLOSED"
      org_role: "owner" | "admin" | "manager" | "member" | "viewer"
      scan_source: "ONLINE" | "OFFLINE_SYNC"
      transfer_status: "PENDING" | "APPROVED" | "REJECTED" | "COMPLETED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      asset_status: [
        "IN_STOCK",
        "ASSIGNED",
        "IN_TRANSFER",
        "IN_REPAIR",
        "RETIRED",
      ],
      attachment_entity_type: [
        "ASSET",
        "ASSIGNMENT",
        "TRANSFER",
        "DISPOSAL",
        "TICKET",
      ],
      disposal_status: ["PENDING", "APPROVED", "REJECTED", "COMPLETED"],
      inventory_status: ["OPEN", "CLOSED"],
      org_role: ["owner", "admin", "manager", "member", "viewer"],
      scan_source: ["ONLINE", "OFFLINE_SYNC"],
      transfer_status: ["PENDING", "APPROVED", "REJECTED", "COMPLETED"],
    },
  },
} as const
